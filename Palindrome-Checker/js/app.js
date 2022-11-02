const palindromeChceker = document.querySelector(".palindrome-checker");
const palindromeCheckerInput = document.querySelector(
  ".palindrome-checker__input"
);
const checkResult = document.querySelector(".check-result");

palindromeChceker.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputText = palindromeCheckerInput.value
    .replaceAll(" ", "")
    .toLowerCase();

  if (!inputText) return;

  if (isPalindrome(inputText)) {
    checkResult.textContent = "Is a palindrome";
  } else {
    checkResult.textContent = "Is NOT a palindrome";
  }
});

function isPalindrome(text) {
  const reversedText = text.split("").reverse().join("");

  if (text === reversedText) return true;

  return false;
}
