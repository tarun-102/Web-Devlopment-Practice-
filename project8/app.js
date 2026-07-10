let slider = document.getElementById("slider");

let index = 0;
let totalImages = 4;
let autoSlide;

function showSlide() {
  slider.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  index++;

  if (index >= totalImages) {
    index = 0;
  }

  showSlide();
}

function prevSlide() {
  index--;

  if (index < 0) {
    index = totalImages - 1;
  }

  showSlide();
}

function playSlide() {
  autoSlide = setInterval(nextSlide, 2000);
}

function stopSlide() {
  clearInterval(autoSlide);
}