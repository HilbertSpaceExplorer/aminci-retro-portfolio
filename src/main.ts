import "./main.css";
import {
  getCurrentLanguage,
  initialiseLanguage,
} from "./i18n";
import WebGL from "./webgl";

initialiseLanguage();
WebGL();

const root = document.documentElement;

function syncDialogOpenState() {
  document.body.classList.toggle(
    "dialog-open",
    Boolean(document.querySelector("dialog[open]")),
  );
}

function onScroll() {
  if (window.scrollY > 10) root.dataset.scroll = "true";
  else root.dataset.scroll = "false";
}
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

const projectDialogTriggers =
  document.querySelectorAll<HTMLButtonElement>("[data-project-dialog]");

projectDialogTriggers.forEach((trigger) => {
  const dialogId = trigger.dataset.projectDialog;
  const dialog = dialogId
    ? document.getElementById(dialogId)
    : null;

  if (!(dialog instanceof HTMLDialogElement)) return;

  const closeButton =
    dialog.querySelector<HTMLButtonElement>("[data-dialog-close]");

  trigger.addEventListener("click", () => {
    if (!dialog.open) dialog.showModal();
    syncDialogOpenState();
  });

  closeButton?.addEventListener("click", () => dialog.close());

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });

  dialog.addEventListener("close", () => {
    syncDialogOpenState();
  });
});

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
