const sounds = document.querySelectorAll("audio");
const buttons = document.querySelectorAll(".btn");

const stopSound = () => {
  sounds.forEach((sound) => {
    if (!sound.paused) {
      sound.pause();
      sound.currentTime = 0;
    }
  });
};

const playSound = (button) => {
  stopSound();

  const [sound] = [...sounds].filter(
    (sound) => sound.id === button.dataset.sound
  );

  sound.play();
};

buttons.forEach((button) => {
  button.addEventListener("click", playSound.bind(null, button));
});
