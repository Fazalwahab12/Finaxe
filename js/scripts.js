document.addEventListener("DOMContentLoaded", function () {
  // Get all dropdown toggles
  const dropdownToggles = document.querySelectorAll(
    ".has-dropdown > .nav-link"
  );

  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", function (e) {
      if (window.innerWidth <= 991) {
        // Only run on small screens
        e.preventDefault(); // Prevent default link behavior
        const parent = this.parentElement; // Get the parent .has-dropdown element

        // Toggle the 'active' class
        parent.classList.toggle("active");

        // Close other dropdowns
        dropdownToggles.forEach((otherToggle) => {
          if (otherToggle !== toggle) {
            otherToggle.parentElement.classList.remove("active");
          }
        });
      }
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", function (e) {
    if (window.innerWidth <= 991) {
      if (!e.target.closest(".has-dropdown")) {
        dropdownToggles.forEach((toggle) => {
          toggle.parentElement.classList.remove("active");
        });
      }
    }
  });
});
