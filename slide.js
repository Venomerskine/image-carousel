let currentIndex = 1

export function showSlide(index){
     if (index >= slides.length) {
    index = 0;
  } else if (index < 0) {
    index = slides.length - 1;
  }

  slides[index].style.display = 'block';
   currentIndex = index;
}

export function nextSlide () {
   currentIndex++
   showSlide(currentIndex)
}

export function prevSlide(){
    currentIndex--
    showSlide(currentIndex)
}

export function startAutoSlide() {
    setTimeout(nextSlide, 5000)
}