const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const slideCounter = document.querySelector(".slide-counter");
let currentSlide = 0;
let isPlaying = true;

// Update slider position and counter
function updateSlidePosition() {
  // Translate based on the total number of slides
  const slideWidthPercentage = 100 / slides.length;
  slider.style.transform = `translateX(-${
    currentSlide * slideWidthPercentage
  }%)`;
  // Update counter text: e.g. "1/4"
  slideCounter.textContent = `${currentSlide + 1}/${slides.length}`;
}

prevButton.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlidePosition();
});

nextButton.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlidePosition();
});

// Automatic sliding (optional)
function autoSlide() {
  if (isPlaying) {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlidePosition();
  }
}
let slideInterval = setInterval(autoSlide, 7000);

// If you want to toggle pause/play via a button, you could do something like:
// const pauseButton = document.querySelector(".pause-button");
// pauseButton.addEventListener("click", () => {
//   isPlaying = !isPlaying;
//   pauseButton.textContent = isPlaying ? "Pause" : "Play";
// });

// Initialize the slider on load
updateSlidePosition();
