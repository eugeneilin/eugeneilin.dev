// Show "loader' for 3 seconds, and then show "intro" and "navbar"
let myVar;

function myLoader() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("intro").style.display = "block";
  document.getElementById("navbar").style.display = "block";
  document.getElementById("main").style.display = "block";
}

// Shrink "navbar" when user scrolls down 663px from the top of the document
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("navbar").style.fontSize = "17px";
    document.getElementById("navbar").style.height = "60px";
    document.getElementById("navbar").style.lineHeight = "60px";
    document.getElementById("navbar").style.backgroundColor = "rgba(0, 2, 30, .9)";
  } else {
    document.getElementById("navbar").style.fontSize = "22px";
    document.getElementById("navbar").style.lineHeight = "110px";
    document.getElementById("navbar").style.height = "110px";
    document.getElementById("navbar").style.backgroundColor = "rgba(255, 255, 255, 0.22)";
  }
}