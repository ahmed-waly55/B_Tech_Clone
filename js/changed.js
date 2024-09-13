let cover = document.querySelector(".cover");
let containerslider = document.querySelector(".container-slider");
let slider = document.querySelector(".sl-nav");

cover.onclick = function(){
    slider.classList.remove("container");
    cover.classList.add("active-s");
    containerslider.classList.remove("active-s");

}

containerslider.onclick = function(){
    slider.classList.add("container");
    cover.classList.remove("active-s");
    containerslider.classList.add("active-s");
}


let nfixed = document.querySelector(".n-fixed");
let nnotfixed = document.querySelector(".n-not-fixed");
let header = document.querySelector(".header");

nnotfixed.onclick = function(){
    header.style.position = "relative";
    nfixed.classList.remove("active-s");
    nnotfixed.classList.add("active-s");

}

nfixed.onclick = function(){
    header.style.position = "sticky";
    nnotfixed.classList.remove("active-s");
    nfixed.classList.add("active-s");
}



let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}










