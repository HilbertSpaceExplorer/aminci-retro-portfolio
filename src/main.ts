import "./main.css";
import WebGL from "./webgl";

WebGL();

const root = document.documentElement;

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
    document.body.classList.add("dialog-open");
  });

  closeButton?.addEventListener("click", () => dialog.close());

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });

  dialog.addEventListener("close", () => {
    document.body.classList.remove("dialog-open");
  });
});
