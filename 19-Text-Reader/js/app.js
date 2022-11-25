const textDisplay = document.querySelector(".text-display");
const speedControl = document.querySelector(".speed-control");
const readBtn = document.querySelector(".read-btn");
const pauseBtn = document.querySelector(".pause-btn");
const stopBtn = document.querySelector(".stop-btn");

const reader = new SpeechSynthesisUtterance();
let currentChar;

const readText = (text) => {
  if (speechSynthesis.speaking && speechSynthesis.paused) {
    return speechSynthesis.resume(reader);
  }

  if (speechSynthesis.speaking) return;

  textDisplay.disabled = true;
  reader.text = text;
  reader.rate = speedControl.value || 1;
  speechSynthesis.speak(reader);
};

reader.addEventListener("end", () => {
  textDisplay.disabled = false;
});

reader.addEventListener("boundary", (e) => {
  currentChar = e.charIndex;
});

speedControl.addEventListener("input", () => {
  speechSynthesis.cancel();
  readText(textDisplay.value.slice(currentChar));
});

readBtn.addEventListener("click", () => {
  readText(textDisplay.value);
});

pauseBtn.addEventListener("click", () => {
  speechSynthesis.pause(reader);
});

stopBtn.addEventListener("click", () => {
  if (speechSynthesis.speaking) {
    speechSynthesis.cancel();
  }
});
