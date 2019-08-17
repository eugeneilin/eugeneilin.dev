// Show "loader' for # seconds, and then show "intro" and "navbar"
let loader;

function myLoader() {
  loader = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("intro").style.display = "block";
  document.getElementById("navbar").style.display = "block";
  document.getElementById("main").style.display = "block";
}

// Shrink "navbar" when user scrolls down # pixels from the top of the document
function shrinkNavbar() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("navbar").style.fontSize = "1em";
    document.getElementById("navbar").style.height = "60px";
    document.getElementById("navbar").style.lineHeight = "60px";
    document.getElementById("line").style.height = "2px";
    document.getElementById("line").style.top = "-2px";
  } else {
    document.getElementById("navbar").style.fontSize = "";
    document.getElementById("navbar").style.lineHeight = "";
    document.getElementById("navbar").style.height = "";
    document.getElementById("line").style.height = "";
    document.getElementById("line").style.top = "";
  }
}

// Get each modal
const tCModal = document.getElementById("temp-converter-modal");
const dCModal = document.getElementById("digital-clock-modal");
const wAModal = document.getElementById("weather-app-modal");

// Get each project
const openTCModal = document.getElementById("open-tc-modal");
const openDCModal = document.getElementById("open-dc-modal");
const openWAModal = document.getElementById("open-wa-modal");

// When the user clicks each project, open the modal for each one
openTCModal.onclick = function () {
  tCModal.style.display = "block";
  document.body.style.position = 'fixed';
};

openDCModal.onclick = function () {
  dCModal.style.display = "block";
  document.body.style.position = 'fixed';
};

openWAModal.onclick = function () {
  wAModal.style.display = "block";
  document.body.style.position = 'fixed';
};

const closeModal = document.getElementsByClassName("close");
let i;

for (i = 0; i < closeModal.length; i++) {
  closeModal[i].addEventListener("click", function () {
    this.parentElement.parentElement.parentElement.style.display = 'none';
    document.body.style.position = '';
  });
}

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

// Back to top Button
function backToTop() {
  document.documentElement.scrollTop = 0;
  document.getElementById('back-to-top-btn').style.display = '';
}

function toggleBtnDisplay() {
  if (document.body.scrollTop > 560 || document.documentElement.scrollTop > 560) {
    document.getElementById("back-to-top-btn").style.display = "block";
  } else {
    document.getElementById("back-to-top-btn").style.display = "none";
  }
}

// when user scrolls, trigger the following functions
window.onscroll = function () {
  shrinkNavbar();
  toggleBtnDisplay();
};

// use escape key to hide projects modal
window.onkeyup = function (event) {
  if (event.key = 27) {
    document.getElementById('temp-converter-modal').style.display = 'none';
    document.getElementById('digital-clock-modal').style.display = 'none';
    document.getElementById('weather-app-modal').style.display = 'none';
    document.body.style.position = '';
  } else {
    document.getElementById('temp-converter-modal').style.display = '.';
    document.getElementById('digital-clock-modal').style.display = '.';
    document.getElementById('weather-app-modal').style.display = '.';
  }
};

// no scroll when modal is open
// function noScroll() {
//   if (document.getElementById('temp-converter-modal').style.display = 'block') {
//     document.body.style.position = 'fixed';
//     document.body.style.top = `-${window.scrollY}px`;
//   }
// }
//
// noScroll();