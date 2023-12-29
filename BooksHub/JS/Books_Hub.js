// PRELOADER

document.addEventListener("DOMContentLoaded", function () {
  let loader = document.getElementById("preloader");
  setTimeout(function () {
    loader.style.display = "none";
  }, 2000);
});

// NAVBAR
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });

  // Close the nav links if clicked outside the navbar area
  document.addEventListener("click", function (e) {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove("show");
    }
  });

  // Hide the navigation links if window width is more than 400px on load
  function handleNavDisplay() {
    if (window.innerWidth > 400) {
      navLinks.classList.remove("show");
    }
  }

  // Listen for window resize and update navigation links display accordingly
  window.addEventListener("resize", handleNavDisplay);

  // Initially check the window width to show/hide navigation links
  handleNavDisplay();
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

// Banner Image Slider
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
