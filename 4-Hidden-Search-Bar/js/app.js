const searchContainer = document.querySelector(".container");
const inputSearch = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", () => {
  searchContainer.classList.toggle("display-search");
  inputSearch.focus();
});
