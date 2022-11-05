//DOM elements
const testimonialImage = document.querySelector(".testimonial__img img");
const testimonialName = document.querySelector(".testimonial__name");
const testimonialRole = document.querySelector(".testimonial__role");
const testimonialText = document.querySelector(".testimonial__text");
const prevBtn = document.querySelector(".testimonial__prev-btn");
const nextBtn = document.querySelector(".testimonial__next-btn");
const randomBtn = document.querySelector(".testimonial__random-btn");

//global variable
let currentTestimonial = 0;

//Functions
const renderTestimonial = (index) => {
  const testimonial = testimonials[index];

  testimonialImage.src = testimonial.image;
  testimonialName.textContent = testimonial.name;
  testimonialRole.textContent = testimonial.role;
  testimonialText.textContent = testimonial.testimonial;
};

const generateRandomIndex = () => {
  const index = Math.floor(Math.random() * testimonials.length);
  return index;
};

//Event Listeners
window.addEventListener("load", () => {
  renderTestimonial(currentTestimonial);
});

prevBtn.addEventListener("click", () => {
  currentTestimonial--;

  if (currentTestimonial < 0) {
    currentTestimonial = testimonials.length - 1;
  }

  renderTestimonial(currentTestimonial);
});

nextBtn.addEventListener("click", () => {
  currentTestimonial++;

  if (currentTestimonial === testimonials.length) {
    currentTestimonial = 0;
  }

  renderTestimonial(currentTestimonial);
});

randomBtn.addEventListener("click", () => {
  renderTestimonial(generateRandomIndex());
});
