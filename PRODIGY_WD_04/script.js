// Sticky Navigation Menu JS Code
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if (document.documentElement.scrollTop > 20) {
    if (scrollBtn) { // Check if scrollBtn exists before using it
      scrollBtn.style.display = "block";
    }
  } else {
    if (scrollBtn) { // Check if scrollBtn exists before using it
      scrollBtn.style.display = "none";
    }
  }
}

// Typed.js initialization
let options = {
  strings: ["Full Stack Developer", "Web Developer", "Software Developer"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true
};
let typed = new Typed("#typed-text", options);
