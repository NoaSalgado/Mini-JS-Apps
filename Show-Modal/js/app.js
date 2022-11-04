const showBtn = document.querySelector(".show-btn");
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal__close-btn");
const overlay = document.querySelector(".overlay");

showBtn.addEventListener("click", () => {
  modal.classList.add("display");
  overlay.classList.add("show");
});

modalCloseBtn.addEventListener("click", () => {
  modal.classList.remove("display");
  overlay.classList.remove("show");
});
