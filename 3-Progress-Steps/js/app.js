const steps = document.querySelectorAll(".progress__step");
const progressLine = document.querySelector(".progress__line");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let activePosition = 0;

nextBtn.addEventListener("click", () => {
  activePosition++;

  if (activePosition === steps.length - 1) {
    nextBtn.disabled = true;
    prevBtn.disabled = false;
  }

  steps[activePosition].classList.add("active");
  updateProgressLine(activePosition);
});

prevBtn.addEventListener("click", () => {
  activePosition--;

  if (activePosition === 0) {
    prevBtn.disabled = true;
    nextBtn.disabled = false;
  }

  steps[activePosition + 1].classList.remove("active");
  updateProgressLine(activePosition);
});

function updateProgressLine(position) {
  progressLine.style.width = `${(position / (steps.length - 1)) * 100}%`;
}
