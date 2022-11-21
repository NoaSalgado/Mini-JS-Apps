const choicesTextarea = document.querySelector(".choices-textarea");
const choiceTagsContainer = document.querySelector(".choice-tags");
const pickedChoiceParagraph = document.querySelector(".picked-choice");
const newChoiceBtn = document.querySelector(".new-choice-btn");

choicesTextarea.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    createChoiceTags(e.target.value);
    e.target.value = "";
    selectRandomTag();
  }
});

newChoiceBtn.addEventListener("click", () => {
  choicesTextarea.focus();
  removeChoiceTags();
  removeSelectedTag();
  hideNewChoiceBtn();
});

function createChoiceTags(textAreaValue) {
  const choices = textAreaValue
    .split(",")
    .filter((choice) => choice.trim() !== "")
    .map((choice) => choice.trim());

  choices.forEach((choice) => {
    const choiceTag = document.createElement("span");
    choiceTag.textContent = choice;
    choiceTag.classList.add("choice-tag");
    choiceTagsContainer.appendChild(choiceTag);
  });
}

function selectRandomTag() {
  let randomTag;
  const interval = setInterval(() => {
    randomTag = getRandomChoiceTag();
    highlightTag(randomTag);
    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      randomTag = getRandomChoiceTag();
      highlightTag(randomTag);
      showSelectedTag(randomTag);
      displayNewChoiceBtn();
    }, 100);
  }, 3000);
}

function getRandomChoiceTag() {
  const choiceTags = document.querySelectorAll(".choice-tag");
  const randomTagIndex = Math.floor(Math.random() * choiceTags.length);
  return choiceTags[randomTagIndex];
}

function highlightTag(choiceTag) {
  choiceTag.classList.add("active");
}

function unHighlightTag(choiceTag) {
  choiceTag.classList.remove("active");
}

function showSelectedTag(randomTag) {
  pickedChoiceParagraph.innerHTML = `Your choice is <span>${randomTag.textContent}</span>`;
}

function displayNewChoiceBtn() {
  newChoiceBtn.classList.add("show");
}

function removeChoiceTags() {
  document
    .querySelectorAll(".choice-tag")
    .forEach((choiceTag) => choiceTag.remove());
}

function removeSelectedTag() {
  pickedChoiceParagraph.textContent = "";
}

function hideNewChoiceBtn() {
  newChoiceBtn.classList.remove("show");
}
