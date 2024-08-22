src = "https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js";

window.onscroll = function () {
  changeHeader();
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function changeHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

//   navbar
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginRight = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
}

// animation code for cdn js library
new WOW().init();
