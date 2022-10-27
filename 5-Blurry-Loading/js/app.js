const background = document.querySelector(".background");
const loadingPercentage = document.querySelector(".loading-percentage");

let loadingNumber = 0;

let interval = setInterval(blurrying, 30);

function blurrying() {
  loadingNumber++;

  if (loadingNumber > 99) {
    clearInterval(interval);
  }

  background.style.filter = `blur(${scale(loadingNumber, 0, 100, 30, 0)}px)`;
  loadingPercentage.textContent = `${loadingNumber}%`;
  loadingPercentage.style.opacity = scale(loadingNumber, 0, 100, 1, 0);
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
