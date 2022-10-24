const shape = document.querySelector(".shape");
const verticalChanger = document.querySelector("#position-y");
const horizontalChanger = document.querySelector("#position-x");
const sizeChanger = document.querySelector("#size");
const rotateChanger = document.querySelector("#rotate");
const shapeChanger = document.querySelector("#shape-changer");
const redColor = document.querySelector("#red");
const greenColor = document.querySelector("#green");
const blueColor = document.querySelector("#blue");
const alphaChannel = document.querySelector("#alpha");
const colorInputs = document.querySelectorAll(".background input");

//Events
verticalChanger.addEventListener("change", () => {
  shape.style.top = verticalChanger.value / 10 + "rem";
});

horizontalChanger.addEventListener("change", () => {
  shape.style.left = horizontalChanger.value / 10 + "rem";
});

sizeChanger.addEventListener("change", () => {
  shape.style.transform = "scale(" + sizeChanger.value + ")";
});

rotateChanger.addEventListener("change", () => {
  shape.style.transform = `rotate(${rotateChanger.value}deg)`;
});

shapeChanger.addEventListener("click", () => {
  shape.classList.remove(shape.classList[1]);
  shape.classList.add(shapeChanger.value);
});

colorInputs.forEach((input) => {
  input.addEventListener("change", () => {
    shape.style.backgroundColor = `rgba(${redColor.value}, ${greenColor.value}, ${blueColor.value}, ${alphaChannel.value})`;
  });
});
