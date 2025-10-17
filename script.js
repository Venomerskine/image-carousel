import { initCarousel, showSlide, stopAutoSlide } from "./slide.js";

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

next.addEventListener('click', () => {
  stopAutoSlide();
  showSlide(currentIndex + 1);
});

prev.addEventListener('click', () => {
  stopAutoSlide();
  showSlide(currentIndex - 1);
});

// Add click functionality to dots
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    stopAutoSlide();
    showSlide(i);
  });
});

initCarousel(slides, dots);
