const counterForm = document.querySelector(".counter");
const counterInput = document.querySelector(".counter__input");
const countResult = document.querySelector(".count-result");

counterForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const word = counterInput.value;
  let count = 0;

  [...word].forEach((letter) => {
    if (letter.match("[aeiouAEIOU]")) {
      count++;
    }
  });

  countResult.innerHTML = `The word <span>${word.toUpperCase()}</span> has ${count} vowels`;
});
