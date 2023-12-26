// PRELOADER
document.addEventListener("DOMContentLoaded", function () {
  let loader = document.getElementById("preloader");
  setTimeout(function () {
    loader.style.display = "none";
  }, 2000);
});

// Detect scroll events and update the width of the scroll indicator
window.addEventListener("scroll", function () {
  const scrollIndicator = document.querySelector(".scroll-indicator");
  const scrollPosition = window.scrollY;
  const documentHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (scrollPosition / documentHeight) * 100;

  scrollIndicator.style.width = scrolled + "%";
});
