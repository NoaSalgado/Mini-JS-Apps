const message = document.querySelector(".message");
const remainingCharacters = document.querySelector(".remaining-characters");

message.addEventListener("input", () => {
  remainingCharacters.textContent--;

  if (remainingCharacters.textContent <= 20) {
    message.style.backgroundColor = "#ca6702";
    remainingCharacters.style.color = "#ca6702";
  }

  if (remainingCharacters.textContent === "0") {
    message.setAttribute("disabled", true);
  }
});
