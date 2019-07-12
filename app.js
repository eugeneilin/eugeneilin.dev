// Show "loader' for 3 seconds, and then show "intro"
let myVar;

function myLoader() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("intro").style.display = "block";
}

// Shrink "navbar" when user scrolls down 663px from the top of the document
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 425 || document.documentElement.scrollTop > 425) {
    document.getElementById("navbar").style.fontSize = "18px";
    document.getElementById("navbar").style.height = "60px";
    document.getElementById("navbar").style.lineHeight = "60px";
    document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 10, 1)";
  } else {
    document.getElementById("navbar").style.fontSize = "25px";
    document.getElementById("navbar").style.lineHeight = "120px";
    document.getElementById("navbar").style.height = "120px";
    document.getElementById("navbar").style.backgroundColor = "#0000007a";
  }
}