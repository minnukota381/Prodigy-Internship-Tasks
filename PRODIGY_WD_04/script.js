let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if (document.documentElement.scrollTop > 20) {
    if (scrollBtn) { 
      scrollBtn.style.display = "block";
    }
  } else {
    if (scrollBtn) { 
      scrollBtn.style.display = "none";
    }
  }
}

$(document).ready(function(){
  $('.navbar-toggler').click(function(){
    $('#navbarNav').collapse('toggle');
  });
  $(document).click(function(event){
    if (!$(event.target).closest('#navbarNav').length) {
      if ($('#navbarNav').collapse('show').length) {
        $('#navbarNav').collapse('hide');
      }
    }
  });
});

let options = {
  strings: ["Full Stack Developer", "Web Developer", "Software Developer"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
  cursorChar: "|",
};
let typed = new Typed("#typed-text span", options);