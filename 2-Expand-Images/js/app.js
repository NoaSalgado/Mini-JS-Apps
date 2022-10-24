const images = document.querySelectorAll(".image");

images.forEach((image) => {
  image.addEventListener("click", () => {
    shrinkPrevImage();
    image.classList.add("active");
  });
});

function shrinkPrevImage() {
  images.forEach((image) => {
    if (image.className.includes("active")) {
      image.classList.remove("active");
    }
  });
}
