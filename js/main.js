//Filter list

$(document).ready(function(){
  $("#listSearch").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myList li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});


// button acount 

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// menu 
let menu =  document.querySelector('.dropdown');
let submenu =  document.querySelector('.dropdown-submenu');
let dropdownmenu =  document.querySelector('.dropdown-menu');
let subdropdownmenu =  document.querySelector('.submm');
// let menu =  document.querySelector('.dropdown');

menu.onclick = function(){
  dropdownmenu.classList.toggle("b-d-block");

}
submenu.onclick = function(){
  subdropdownmenu.classList.toggle("b-d-block");
}




// slider box 

const gap = 16;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));


// offer slider 1
//error

// "use strict";

productScroll();

function productScroll() {
  let slider = document.getElementById("slider");
  let next = document.getElementsByClassName("offer-btn-r");
  let prev = document.getElementsByClassName("offer-btn-l");
  let slide = document.getElementById("slide");
  let item = document.getElementById("slide");

  for (let i = 0; i < next.length; i++) {
    //refer elements by class name

    let position = 0; //slider postion

    prev[i].addEventListener("click", function() {
      //click previos button
      if (position > 0) {
        //avoid slide left beyond the first item
        position -= 1;
        translateX(position); //translate items
      }
    });

    next[i].addEventListener("click", function() {
      if (position >= 0 && position < hiddenItems()) {
        //avoid slide right beyond the last item
        position += 1;
        translateX(position); //translate items
      }
    });
  }

  function hiddenItems() {
    //get hidden items
    let items = getCount(item, false);
    let visibleItems = slider.offsetWidth / 210;
    return items - Math.ceil(visibleItems);
  }
}

function translateX(position) {
  //translate items
  slide.style.left = position * -210 + "px";
}

function getCount(parent, getChildrensChildren) {
  //count no of items
  let relevantChildren = 0;
  let children = parent.childNodes.length;
  for (let i = 0; i < children; i++) {
    if (parent.childNodes[i].nodeType != 3) {
      if (getChildrensChildren)
        relevantChildren += getCount(parent.childNodes[i], true);
      relevantChildren++;
    }
  }
  return relevantChildren;
}



// offer spcial 


// offer slider 2




// "use strict";

productScrollo();

function productScrollo() {
  let slidero = document.getElementById("slidero");
  let nexto = document.getElementsByClassName("right-btn");
  let prevo = document.getElementsByClassName("left-btn");
  let slideo = document.getElementById("slideo");
  let itemo = document.getElementById("slideo");

  for (let ii = 0; ii < nexto.length; ii++) {
    //refer elements by class name

    let positiono = 0; //slider postion

    prevo[ii].addEventListener("click", function() {
      //click previos button
      if (positiono > 0) {
        //avoid slide left beyond the first item
        positiono -= 1;
        translateX(positiono); //translate items
      }
    });

    nexto[ii].addEventListener("click", function() {
      if (positiono >= 0 && positiono < hiddenItems()) {
        //avoid slide right beyond the last item
        positiono += 1;
        translateX(positiono); //translate items
      }
    });
  }

  function hiddenItems() {
    //get hidden items
    let itemso = getCount(itemo, false);
    let visibleItemso = slidero.offsetWidth / 210;
    return itemso - Math.ceil(visibleItemso);
  }
}

function translateX(positiono) {
  //translate items
  slideo.style.left = positiono * -210 + "px";
}

function getCount(parent, getChildrensChildren) {
  //count no of items
  let relevantChildren = 0;
  let children = parent.childNodes.length;
  for (let i = 0; i < children; i++) {
    if (parent.childNodes[i].nodeType != 3) {
      if (getChildrensChildren)
        relevantChildren += getCount(parent.childNodes[i], true);
      relevantChildren++;
    }
  }
  return relevantChildren;
}




// test 




// brand 

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}




// navbar side 

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}



// option 

function openoption() {
  document.getElementById("myoption").style.width = "250px";
  // document.querySelector("section").style.marginLeft = "250px";
}

function closeoption() {
  document.getElementById("myoption").style.width = "0";
  // document.getElementsByTagName("section").style.marginLeft= "0";
}



// page sell-on-btech 


// ask erorr
setInterval(function(){
  
  const navbar = document.querySelector(".cash-card");

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

  if (window.scrollY >= sticky - 300) {
    navbar.classList.add("animated");
    navbar.classList.add("fadeInUp");
  } else {
    navbar.classList.remove("bounceInDown");
  }


},200)
// console.log(window.pageYOffset);
// log 


let login = document.querySelector(".flip-box-inner");

function change(cc){
    if(cc == 1){
        login.style.transform = "rotateY(180deg)";
    }if (cc == 0) {
        login.style.transform = "rotateY(0deg)";        
        
    } 
        
    
    
}