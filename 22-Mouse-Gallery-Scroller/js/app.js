const imageSlider = document.querySelector(".img-container");
let mouseIsDown = false;
let startX;
let scrollToLeft;

imageSlider.addEventListener("mousedown", (e) => {
  mouseIsDown = true;
  imageSlider.classList.add("active");
  //Calculates the exact point where you click inside the slider
  startX = e.pageX - imageSlider.offsetLeft;
  //Distance the content is moved
  scrollToLeft = imageSlider.scrollLeft;
});

imageSlider.addEventListener("mouseup", () => {
  mouseIsDown = false;
  imageSlider.classList.remove("active");
});

imageSlider.addEventListener("mouseleave", () => {
  mouseIsDown = false;
  imageSlider.classList.remove("active");
});

imageSlider.addEventListener("mousemove", (e) => {
  if (!mouseIsDown) return;
  e.preventDefault();

  const positionX = e.pageX - imageSlider.offsetLeft;
  const distanceCovered = positionX - startX;
  console.log("Posición: ", distanceCovered);
  console.log("Scroll: ", scrollToLeft);
  imageSlider.scrollLeft = scrollToLeft - distanceCovered;
});
