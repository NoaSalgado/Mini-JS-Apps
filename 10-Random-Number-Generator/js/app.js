const number = document.querySelector(".number");
const generateBtn = document.querySelector(".generate-btn");

generateBtn.addEventListener("click", () => {
  number.textContent = Math.floor(Math.random() * 100);
});
