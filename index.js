const slides = document.querySelectorAll(".slide");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", () => {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);
  }
});

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = index;
  }

  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });

  slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
  clearInterval(intervalId);
  showSlide(slideIndex - 1);
}

function nextSlide() {
  clearInterval(intervalId);
  showSlide(slideIndex + 1);
}
