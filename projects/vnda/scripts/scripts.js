const nav = document.querySelector(".nav");
const toggle = document.querySelector(".nav__toggle");
const hamburger = document.querySelector(".nav__toggle .hamburger");

toggle.addEventListener("click", function() {
  nav.classList.toggle("open-nav");
  hamburger.classList.toggle("open-hamburger");
});

$(document).ready(function() {
  $(".slider").slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    fade: true,
    cssEase: "linear"
  });

  instafetch.init({
    accessToken: "1316473856.1677ed0.95337adab33041b2a436daf59c922c11",
    target: "instafeed",
    numOfPics: 6
  });
});
