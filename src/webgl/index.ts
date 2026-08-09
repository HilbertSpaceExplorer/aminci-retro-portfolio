import * as THREE from "three";
import DeltaTime from "../DeltaTime";
import Screen from "./screen/";
import Stats from "stats.js";
import { loadAssists } from "./loader";
import { Vector3 } from "three";

function valMap(x: number, from: [number, number], to: [number, number]) {
  const y = ((x - from[0]) / (from[1] - from[0])) * (to[1] - to[0]) + to[0];

  if (to[0] < to[1]) {
    if (y < to[0]) return to[0];
    if (y > to[1]) return to[1];
  } else {
    if (y > to[0]) return to[0];
    if (y < to[1]) return to[1];
  }

  return y;
}

let viewHeight = document.documentElement.clientHeight;
let scroll = window.scrollY / document.documentElement.clientHeight;
let targetScroll = scroll;
window.addEventListener(
  "scroll",
  () => {
    targetScroll = window.scrollY / viewHeight;
  },
  { passive: true }
);

export default function WebGL() {
  loadAssists((assists) => {
    const stats = new Stats();
    const hash = window.location.hash;
    if (hash) {
      if (hash.toLowerCase() === "#debug") {
        stats.showPanel(0);
        document.body.appendChild(stats.dom);

        const textarea = document.getElementById(
          "textarea"
        ) as HTMLTextAreaElement;
        textarea.style.zIndex = "3";
        textarea.style.opacity = "1";
      }
    }

    // Canvas
    const canvas = document.querySelector("canvas.webgl") as HTMLCanvasElement;
    if (!canvas) console.error("no canvas");
    /**
     * Sizes
     */
    const sizes = {
      width: document.documentElement.clientWidth,
      height: window.innerHeight,
      portraitOffset: valMap(
        window.innerHeight / document.documentElement.clientWidth,
        [0.75, 1.75],
        [0, 2]
      ),
    };

    // Scene
    const scene = new THREE.Scene();
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.55);
    scene.add(ambientLight);
    scene.background = new THREE.Color(0xd4ebe5);

    /**
     * Camera
     */
    // Base camera
    const camera = new THREE.PerspectiveCamera(
      50,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.set(0, 0, -2.5);
    // camera.position.set(0, -1, -5.5);
    camera.rotation.set(-Math.PI, 0, Math.PI);
    scene.add(camera);

    // Controls
    const controlProps = {
      computerHeight: 1.5,
      computerAngle: Math.PI * 0.2,
      computerHorizontal: 0.5,

      minAzimuthAngleOffest: -Math.PI * 0.3,
      maxAzimuthAngleOffest: Math.PI * 0.3,

      minPolarAngleOffest: -Math.PI * 0.3,
      maxPolarAngleOffest: 0,
    };

    let mousedown: { x: number; y: number } | null = null;
    function checkIfTouch(event: PointerEvent) {
      if (event.pointerType !== "mouse") {
        mousedown = null;
        computerParallax.x = 0;
        computerParallax.y = 0;
      }
    }
    const computerParallax = { x: 0, y: 0 };
    canvas.addEventListener(
      "pointermove",
      (event) => {
        checkIfTouch(event);
        if (mousedown) {
          computerParallax.x +=
            (event.clientX - mousedown.x) / (window.innerWidth * 0.5);
          computerParallax.x = valMap(computerParallax.x, [-1, 1], [-1, 1]);

          computerParallax.y +=
            (event.clientY - mousedown.y) / (window.innerHeight * 0.5);
          computerParallax.y = valMap(computerParallax.y, [-1, 1], [-1, 1]);

          mousedown = { x: event.clientX, y: event.clientY };
        }
      },
      { passive: true }
    );

    canvas.addEventListener(
      "pointerdown",
      (event) => {
        checkIfTouch(event);
        mousedown = { x: event.clientX, y: event.clientY };
      },
      { passive: true }
    );

    document.addEventListener(
      "pointerup",
      (event) => {
        checkIfTouch(event);
        mousedown = null;
      },
      { passive: true }
    );

    /**
     * Renderer
     */

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });
    const updatePixelRatio = () => {
      const pixelRatioLimit = window.innerWidth < 780 ? 1.25 : 1.5;
      renderer.setPixelRatio(
        Math.min(window.devicePixelRatio || 1, pixelRatioLimit)
      );
    };
    updatePixelRatio();
    renderer.setSize(sizes.width, sizes.height);
    renderer.outputEncoding = THREE.sRGBEncoding;

    function updateCanvasSize(width: number, height: number) {
      // Update camera
      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(width, height);
    }
    window.addEventListener(
      "resize",
      () => {
        // Update sizes

        viewHeight = document.documentElement.clientHeight;
        targetScroll = window.scrollY / viewHeight;
        scroll = targetScroll;
        sizes.width = document.documentElement.clientWidth;
        sizes.height = window.innerHeight;
        updatePixelRatio();
        updateCanvasSize(sizes.width, sizes.height);
        sizes.portraitOffset = valMap(
          sizes.height / sizes.width,
          [0.8, 1.8],
          [0, 2.5]
        );
      },
      { passive: true }
    );

    const screen = Screen(assists, renderer);

    const planelikeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const plane = new THREE.Mesh(
      planelikeGeometry,
      // texture
      new THREE.MeshBasicMaterial({ color: "blue" })
    );
    plane.scale.x = 1.33;

    // Materials
    const computerMaterial = new THREE.MeshBasicMaterial({
      map: assists.bakeTexture,
    });

    /**
     * Models
     */
    const computerGroup = new THREE.Group();

    assists.screenMesh.material = screen.screenRenderEngine.material;
    computerGroup.add(assists.screenMesh);

    assists.computerMesh.material = computerMaterial;
    computerGroup.add(assists.computerMesh);

    assists.crtMesh.material = computerMaterial;
    computerGroup.add(assists.crtMesh);

    assists.keyboardMesh.material = computerMaterial;
    computerGroup.add(assists.keyboardMesh);

    assists.shadowPlaneMesh.material = new THREE.ShaderMaterial({
      uniforms: {
        uShadowMap: { value: assists.bakeFloorTexture },
        uShadowColor: { value: new THREE.Color(0x414a49) },
      },
      vertexShader: `
        varying vec2 vUv;

        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D uShadowMap;
        uniform vec3 uShadowColor;
        varying vec2 vUv;

        void main() {
          vec3 bakedFloor = texture2D(uShadowMap, vUv).rgb;
          float luminance = dot(bakedFloor, vec3(0.299, 0.587, 0.114));
          float shadowStrength = 1.0 - smoothstep(0.16, 0.62, luminance);

          gl_FragColor = vec4(uShadowColor, shadowStrength * 0.42);
        }
      `,
      transparent: true,
      depthWrite: false,
    });
    computerGroup.add(assists.shadowPlaneMesh);

    computerGroup.position.x = controlProps.computerHorizontal;
    computerGroup.position.y = controlProps.computerHeight;
    computerGroup.rotation.y = controlProps.computerAngle;
    scene.add(computerGroup);

    /**
     * Animate
     */

    const clock = new THREE.Clock();
    const lookAtTarget = new Vector3(0, 0, 0);
    const screenFrameInterval = window.matchMedia("(pointer: coarse)").matches
      ? 1 / 24
      : 1 / 30;
    let screenFrameAccumulator = 0;

    const tick = () => {
      window.requestAnimationFrame(tick);

      if (document.hidden) return;

      const deltaTime = Math.min(DeltaTime(), 0.05);
      const scrollEase = Math.min(1, deltaTime * 10);
      scroll += (targetScroll - scroll) * scrollEase;

      if (targetScroll >= 1.8 && scroll >= 1.75) {
        if (canvas.style.opacity !== "0") canvas.style.opacity = "0";
        return;
      }

      if (document.body.classList.contains("dialog-open")) return;

      stats.begin();

      const elapsedTime = clock.getElapsedTime();

      const zoomFac = valMap(scroll, [0, 1], [0, 1]);

      camera.position.z = valMap(
        scroll,
        [0, 1],
        [-2.5 - sizes.portraitOffset, -10 - sizes.portraitOffset]
      );

      computerGroup.position.x = controlProps.computerHorizontal * zoomFac;
      computerGroup.position.y = valMap(
        scroll,
        [0, 1],
        [0, controlProps.computerHeight]
      );

      computerGroup.rotation.y = controlProps.computerAngle * zoomFac;

      camera.position.x =
        computerParallax.x * valMap(scroll, [0, 1], [0.2, 5]) * 0.1 +
        camera.position.x * 0.9;
      camera.position.y =
        computerParallax.y * valMap(scroll, [0, 1], [0.2, 1.5]) * 0.1 +
        camera.position.y * 0.9;

      camera.lookAt(lookAtTarget);

      const canvasOpacity = `${valMap(scroll, [1.25, 1.75], [1, 0])}`;
      if (canvas.style.opacity !== canvasOpacity) {
        canvas.style.opacity = canvasOpacity;
      }

      if (sizes.portraitOffset > 0.5)
        computerGroup.rotation.z = valMap(scroll, [0, 1], [-Math.PI / 2, 0]);
      else computerGroup.rotation.z = 0;

      if (assists.crtMesh.morphTargetInfluences) {
        assists.crtMesh.morphTargetInfluences[0] = valMap(
          zoomFac,
          [0, 0.1],
          [0.5, 0]
        );
      }

      screenFrameAccumulator += deltaTime;
      if (screenFrameAccumulator >= screenFrameInterval) {
        screen.tick(screenFrameAccumulator, elapsedTime);
        screenFrameAccumulator = 0;
      }

      renderer.setRenderTarget(null);
      renderer.render(scene, camera);

      stats.end();
    };

    window.requestAnimationFrame(tick);
  });
}
