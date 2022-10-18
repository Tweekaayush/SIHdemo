
let header = document.querySelector("header");
let bt = document.getElementById("signup");
let section = document.querySelectorAll("section");
let form = document.querySelector(".page");
let cross = document.querySelector(".cross-mark");
var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0, 
});
var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    thumbs: {
        swiper: swiper,
    },
});

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0);
});
bt.addEventListener("click", function(){
    event.preventDefault();
    section.forEach((item)=>{
        item.classList.toggle("blurre");
    });
    form.classList.toggle("opa");
});
cross.addEventListener("click", function(){
    section.forEach((item)=>{
        item.classList.toggle("blurre");
    });
    form.classList.toggle("opa");
});

var current = null;
document.querySelector('#email').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: 0,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '240 1386',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});
document.querySelector('#password').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: -336,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '240 1386',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});
document.querySelector('#submit').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: -730,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '530 1386',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});
