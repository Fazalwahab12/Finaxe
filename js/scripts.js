const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const slideCounter = document.querySelector(".slide-counter");
let currentSlide = 0;

function updateSlidePosition() {
  slider.style.transform = `translateX(-${currentSlide * 50}%)`;
  slideCounter.textContent = `${currentSlide + 1}/2`;
}

prevButton.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlidePosition();
});

nextButton.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlidePosition();
});

// Optional: Auto-slide
let isPlaying = true;
const pauseButton = document.querySelector(".pause-button");

function autoSlide() {
  if (isPlaying) {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlidePosition();
  }
}

let slideInterval = setInterval(autoSlide, 3000);
