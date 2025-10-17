let slides;
let dots;
let currentIndex = 0;
let autoSlideInterval;

export function initCarousel(slideElements, dotElements) {
  slides = slideElements;
  dots = dotElements;
  showSlide(currentIndex);
  startAutoSlide();
}

export function showSlide(index) {
  if (index >= slides.length) index = 0;
  if (index < 0) index = slides.length - 1;

  slides.forEach(slide => (slide.style.display = 'none'));
  dots.forEach(dot => dot.classList.remove('active'));

  slides[index].style.display = 'block';
  dots[index].classList.add('active');

  currentIndex = index;
}



export function nextSlide() {
  showSlide(currentIndex + 1);
}

export function prevSlide() {
  showSlide(currentIndex - 1);
}

export function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 5000);
}

export function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}