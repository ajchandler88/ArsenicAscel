const navBtn = document.querySelector("#navBtn");
const navBar = document.querySelector("#mobile_nav_ul");
const mobileBtn = document.querySelector("#mobileBtn");
const body = document.querySelector('body');

navBtn.addEventListener('click', function onClick() {
    navBar.classList.toggle('hidden');
    body.classList.toggle('no-scroll');
    mobileBtnCheck();
    }

);

function mobileBtnCheck(){
    if (mobileBtn.classList.contains('fa-bars')){
        mobileBtn.classList.remove('fa-bars');
        mobileBtn.classList.add('fa-x');
    }
    else if (mobileBtn.classList.contains('fa-x')){
        mobileBtn.classList.remove('fa-x');
        mobileBtn.classList.add('fa-bars');
    }
}





var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}