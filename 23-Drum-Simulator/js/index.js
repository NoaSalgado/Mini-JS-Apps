const sounds = {
  a: "tom-1",
  s: "tom-2",
  d: "tom-3",
  f: "tom-4",
  j: "snare",
  k: "crash",
  l: "kick-bass",
};

const drumSoundBtns = document.querySelectorAll(".drum-sound");

const playSound = (soundId) => {
  const sound = new Audio(`./sounds/${soundId}.mp3`);
  sound.play();
};

const applyEffect = (btn) => {
  btn.classList.add("playing");

  setTimeout(() => {
    btn.classList.remove("playing");
  }, 100);
};

drumSoundBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    playSound(e.target.dataset.sound);
    applyEffect(e.target);
  });
});

document.addEventListener("keydown", (e) => {
  if (!sounds.hasOwnProperty(e.key)) return;

  const soundId = sounds[e.key];
  const equivalentBtn = document.querySelector(`[data-sound="${soundId}"]`);
  playSound(soundId);
  applyEffect(equivalentBtn);
});
