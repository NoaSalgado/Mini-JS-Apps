const containers = document.querySelectorAll(".container");
const elements = document.querySelectorAll(".element");

let draggedElement;

elements.forEach((element) => {
  element.addEventListener("dragstart", () => {
    draggedElement = element;
    setTimeout(() => {
      draggedElement.style.display = "none";
    }, 50);
  });

  element.addEventListener("dragend", () => {
    setTimeout(() => {
      draggedElement.style.display = "block";
      draggedElement = null;
    }, 50);
  });
});

containers.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  container.addEventListener("dragenter", (e) => {
    e.preventDefault();
    container.classList.add("dragenter");
  });

  container.addEventListener("dragleave", (e) => {
    container.classList.remove("dragenter");
  });

  container.addEventListener("drop", (e) => {
    container.append(draggedElement);
    container.classList.remove("dragenter");
  });
});
