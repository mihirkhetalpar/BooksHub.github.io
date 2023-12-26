                                                    // PRELOADER 
                                                    
document.addEventListener("DOMContentLoaded", function() {
let loader = document.getElementById("preloader");
setTimeout(function() {
loader.style.display = "none";
   }, 2000); 
});

                                // Detect scroll events and update the width of the scroll indicator
window.addEventListener('scroll', function() {
  const scrollIndicator = document.querySelector('.scroll-indicator');
  const scrollPosition = window.scrollY;
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (scrollPosition / documentHeight) * 100;

  scrollIndicator.style.width = scrolled + '%';
});

                                                                                                                                           
                                                    // Banner Image Slider
const slides = document.querySelectorAll(".slide");
const slideWidth = slides[0].clientWidth;
const radioButtons = document.querySelectorAll(".slider-nav label");
let currentIndex = 0;

function showSlide(index) {
  const offset = -index * slideWidth;
  slides.forEach((slide) => {
    slide.style.transform = `translateX(${offset}px)`;
  });
}

radioButtons.forEach((radio, index) => {
  radio.addEventListener("click", () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
});

// Initialize the slider to show the first slide
showSlide(currentIndex);

// Auto slide every 5 seconds
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
  radioButtons[currentIndex].checked = true;
}

setInterval(nextSlide, 4000);



                                                                                                     


