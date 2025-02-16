document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".card1-grid1");
  const cards = document.querySelectorAll(".card1");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  let index = 0;
  const visibleCards = 4; // Show 4 cards at a time
  const totalCards = cards.length;
  const cardWidth = cards[0].offsetWidth + 20; // Card width + gap

  function updateSlider() {
    slider.style.transform = `translateX(-${index * cardWidth}px)`;
  }

  nextButton.addEventListener("click", function () {
    if (index < totalCards - visibleCards) {
      index++;
      updateSlider();
    }
  });

  prevButton.addEventListener("click", function () {
    if (index > 0) {
      index--;
      updateSlider();
    }
  });
});
