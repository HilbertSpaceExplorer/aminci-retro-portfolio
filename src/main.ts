import "./main.css";
import { inject } from "@vercel/analytics";
import { injectSpeedInsights } from "@vercel/speed-insights";
import {
  getCurrentLanguage,
  initialiseLanguage,
} from "./i18n";
import WebGL from "./webgl";

inject();
injectSpeedInsights();

const root = document.documentElement;
const portfolioHome = document.getElementById("portfolio-home");
const projectPages = document.getElementById("project-pages");
const loadingScreen = document.getElementById("loading");
const cvLinks = document.querySelectorAll<HTMLAnchorElement>("[data-cv-link]");

const projectRoutes = [
  {
    slug: "continuum-robot",
    id: "project-continuum-robot",
    title: "Continuum Robot Shape Prediction",
  },
  {
    slug: "compressed-air-ml",
    id: "project-compressed-air-ml",
    title: "Compressed-Air System ML",
  },
  {
    slug: "vision-laptimer",
    id: "project-laptime-stopwatch",
    title: "Vision-Based Robot Laptimer",
  },
  {
    slug: "ai-life-os",
    id: "project-ai-life-os",
    title: "AI Life OS",
  },
  {
    slug: "pid-evaluation",
    id: "project-pid-evaluation",
    title: "PID Response Evaluation",
  },
  {
    slug: "ros2-maze-navigation",
    id: "project-ros2-maze-navigation",
    title: "ROS 2 Mobile Robot Navigation",
  },
] as const;

const projectsSection = document.getElementById("projects");
if (projectsSection) {
  projectRoutes.forEach((project, index) => {
    const trigger = projectsSection.querySelector<HTMLElement>(
      `[data-project-dialog="${project.id}"]`,
    );
    const card = trigger?.closest<HTMLElement>(".project");
    if (!card) return;

    const fileLabel = card.querySelector<HTMLElement>(".project-filebar span");
    if (fileLabel) fileLabel.textContent = `LAB FILE ${String(index + 1).padStart(2, "0")}`;
    projectsSection.append(card);
  });
}

const normalisedPath = window.location.pathname.replace(/\/+$/, "") || "/";
const currentProject = projectRoutes.find(
  ({ slug }) => normalisedPath === `/projects/${slug}`,
);

projectRoutes.forEach((project, index) => {
  const page = document.getElementById(project.id);
  if (!(page instanceof HTMLElement)) return;

  const fileLabel = page.querySelector<HTMLElement>(
    ".project-dialog-bar span:first-child",
  );
  if (fileLabel) fileLabel.textContent = `LAB FILE ${String(index + 1).padStart(2, "0")}`;

  const backButton = page.querySelector<HTMLButtonElement>("[data-dialog-close]");
  if (backButton) {
    backButton.textContent = "BACK TO ARCHIVE ←";
    backButton.setAttribute("aria-label", "Back to project archive");
    backButton.addEventListener("click", () => {
      window.location.href = `/?lang=${getCurrentLanguage()}#projects`;
    });
  }

  const previous = projectRoutes[(index - 1 + projectRoutes.length) % projectRoutes.length];
  const next = projectRoutes[(index + 1) % projectRoutes.length];
  const pageNavigation = document.createElement("div");
  pageNavigation.className = "project-page-navigation";
  pageNavigation.setAttribute("aria-label", "Project navigation");
  pageNavigation.innerHTML = `
    <a href="/projects/${previous.slug}">
      <span>PREVIOUS FILE</span>
      <strong>${previous.title}</strong>
    </a>
    <a href="/#projects" class="project-page-navigation-home">
      <span>PROJECT ARCHIVE</span>
      <strong>Back to all projects</strong>
    </a>
    <a href="/projects/${next.slug}">
      <span>NEXT FILE</span>
      <strong>${next.title}</strong>
    </a>
  `;
  page.querySelector(".project-dialog-body")?.append(pageNavigation);
});

if (currentProject && portfolioHome && projectPages) {
  portfolioHome.hidden = true;
  projectPages.hidden = false;
  root.dataset.view = "project";
  root.dataset.scroll = "true";

  projectRoutes.forEach(({ id }) => {
    const page = document.getElementById(id);
    if (page instanceof HTMLElement) page.hidden = id !== currentProject.id;
  });

  root.classList.remove("booting");
  if (loadingScreen instanceof HTMLElement) loadingScreen.style.display = "none";
} else {
  if (portfolioHome) portfolioHome.hidden = false;
  if (projectPages) projectPages.hidden = true;
  projectRoutes.forEach(({ id }) => {
    const page = document.getElementById(id);
    if (page instanceof HTMLElement) page.hidden = true;
  });
}

initialiseLanguage();

function updateCvLinks() {
  const german = getCurrentLanguage() === "de";
  cvLinks.forEach((link) => {
    link.href = german
      ? "/cv/Aminci_Gana_CV_DE.pdf"
      : "/cv/Aminci_Gana_CV_EN.pdf";
    link.setAttribute("aria-label", german ? "Lebenslauf öffnen" : "Open CV");
    link.title = german ? "Lebenslauf öffnen" : "Open CV";
  });
}

updateCvLinks();

function updateProjectMetadata() {
  if (!currentProject) return;
  const page = document.getElementById(currentProject.id);
  const title = page?.querySelector("h2")?.textContent?.trim() || currentProject.title;
  const description = page
    ?.querySelector<HTMLElement>(".project-dialog-summary > p:not(.project-dialog-kicker)")
    ?.textContent?.trim();

  document.title = `${title} | Aminci Gana`;
  if (description) {
    document.querySelector<HTMLMetaElement>('meta[name="description"]')
      ?.setAttribute("content", description);
    document.querySelector<HTMLMetaElement>('meta[property="og:description"]')
      ?.setAttribute("content", description);
  }
  document.querySelector<HTMLMetaElement>('meta[property="og:title"]')
    ?.setAttribute("content", `${title} | Aminci Gana`);
}

updateProjectMetadata();
document.querySelectorAll<HTMLButtonElement>("[data-language]").forEach((button) => {
  button.addEventListener("click", () => {
    updateProjectMetadata();
    updateCvLinks();
  });
});

if (!currentProject) WebGL();

function syncDialogOpenState() {
  document.body.classList.toggle(
    "dialog-open",
    Boolean(document.querySelector("dialog[open]")),
  );
}

function onScroll() {
  if (currentProject || window.scrollY > 10) root.dataset.scroll = "true";
  else root.dataset.scroll = "false";
}
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

const imageViewer = document.getElementById("project-image-viewer");
const imageViewerImage = imageViewer?.querySelector<HTMLImageElement>(
  "[data-image-viewer-image]",
);
const imageViewerCaption = imageViewer?.querySelector<HTMLElement>(
  "[data-image-viewer-caption]",
);
const imageViewerClose = imageViewer?.querySelector<HTMLButtonElement>(
  "[data-image-viewer-close]",
);
const imageViewerOpen = imageViewer?.querySelector<HTMLAnchorElement>(
  "[data-image-viewer-open]",
);
const expandableImages =
  document.querySelectorAll<HTMLElement>(
    "[data-image-expand], .project-diagram-link",
  );

if (
  imageViewer instanceof HTMLDialogElement &&
  imageViewerImage &&
  imageViewerCaption
) {
  expandableImages.forEach((imageLink) => {
    imageLink.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      const sourceImage = imageLink.querySelector<HTMLImageElement>("img");
      if (!sourceImage) return;

      imageViewerImage.src = sourceImage.currentSrc || sourceImage.src;
      imageViewerImage.alt = sourceImage.alt;
      imageViewerCaption.textContent = sourceImage.alt;
      if (imageViewerOpen) imageViewerOpen.href = imageViewerImage.src;
      if (!imageViewer.open) imageViewer.showModal();
      syncDialogOpenState();
    });
  });

  imageViewerClose?.addEventListener("click", () => imageViewer.close());

  imageViewer.addEventListener("click", (event) => {
    if (event.target === imageViewer) imageViewer.close();
  });

  imageViewer.addEventListener("close", () => {
    imageViewerImage.removeAttribute("src");
    imageViewerImage.alt = "";
    imageViewerCaption.textContent = "";
    imageViewerOpen?.setAttribute("href", "#");
    syncDialogOpenState();
  });
}

const copyEmailButton =
  document.querySelector<HTMLButtonElement>("[data-copy-email]");
const contactFeedback =
  document.getElementById("contact-feedback");

function copyTextFallback(text: string) {
  const temporaryInput = document.createElement("textarea");
  temporaryInput.value = text;
  temporaryInput.setAttribute("readonly", "");
  temporaryInput.style.position = "fixed";
  temporaryInput.style.opacity = "0";
  document.body.appendChild(temporaryInput);
  temporaryInput.select();

  const copied = document.execCommand("copy");
  temporaryInput.remove();
  return copied;
}

copyEmailButton?.addEventListener("click", async () => {
  const email = copyEmailButton.dataset.copyEmail;
  if (!email) return;

  let copied = false;

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(email);
      copied = true;
    } else {
      copied = copyTextFallback(email);
    }
  } catch {
    copied = copyTextFallback(email);
  }

  if (contactFeedback) {
    const german = getCurrentLanguage() === "de";
    contactFeedback.textContent = copied
      ? german
        ? "E-Mail-Adresse wurde kopiert."
        : "Email copied to clipboard."
      : german
        ? `Kopieren fehlgeschlagen. E-Mail: ${email}`
        : `Copy failed. Email: ${email}`;
  }
});
