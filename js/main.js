// jQuery
$(document).ready(function() {
  'use strict';

  // Hide placeholder on form focus
  $('[placeholder]').focus(function() {
    $(this).attr('placetext', $(this).attr('placeholder'));
    $(this).attr('placeholder', '');
  }).blur(function() {
    $(this).attr('placeholder', $(this).attr('placetext'));
  });

});

// js 
let bar = document.getElementById("bars");
let close = document.getElementById("close");
let nav = document.querySelector(".navbar");


bar.addEventListener("click", () => {
  nav.classList.toggle("active");
});

close.addEventListener("click", () => {
  nav.classList.remove("active")
})

let mainImg = document.getElementById("mainImg");
let samllimg = document.getElementsByClassName("small-img")

samllimg[0].onclick = function () {
  mainImg.src = samllimg[0].src;
}

samllimg[1].onclick = function () {
  mainImg.src = samllimg[1].src;
}

samllimg[2].onclick = function () {
  mainImg.src = samllimg[2].src;
}

samllimg[3].onclick = function () {
  mainImg.src = samllimg[3].src;
}



