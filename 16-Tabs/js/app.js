const btnsContainer = document.querySelector(".about__content--btns");
const buttons = document.querySelectorAll(".about__content--btns button");
const aboutTexts = document.querySelectorAll(".about__content--text div");

const deactivateBtn = () => {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
};

const hideText = () => {
  aboutTexts.forEach((aboutText) => {
    aboutText.classList.remove("display");
  });
};

btnsContainer.addEventListener("click", (e) => {
  deactivateBtn();
  hideText();

  const id = e.target.dataset.id;
  const currentText = document.getElementById(id);

  e.target.classList.add("active");
  currentText.className = "display";
});
