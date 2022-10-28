const sections = document.querySelectorAll(".section");

window.addEventListener("load", displaySections);
window.addEventListener("scroll", displaySections);

function displaySections() {
  bottomLimit = (window.innerHeight / 5) * 4;

  sections.forEach((section) => {
    sectionRect = section.getBoundingClientRect();

    if (sectionRect.top < bottomLimit) {
      section.classList.add("display");
    } else {
      section.classList.remove("display");
    }
  });
}
