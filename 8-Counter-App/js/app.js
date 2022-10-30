const countNumber = document.querySelector(".counter__number");
const subtractBtn = document.querySelector(".counter__btns--subtract");
const resetBtn = document.querySelector(".counter__btns--reset");
const addBtn = document.querySelector(".counter__btns--add");

let count = 0;

subtractBtn.addEventListener("click", () => {
  count--;
  displayCount(count);
});

resetBtn.addEventListener("click", () => {
  count = 0;
  displayCount(count);
});

addBtn.addEventListener("click", () => {
  count++;
  displayCount(count);
});

function displayCount(count) {
  countNumber.textContent = count;

  if (count > 0) {
    countNumber.style.color = "#87c38f";
  } else if (count < 0) {
    countNumber.style.color = "#e5383b";
  } else {
    countNumber.style.color = "#f0ebd8";
  }
}
