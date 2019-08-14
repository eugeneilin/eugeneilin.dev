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
// function moreThan0 {
//   if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
//     document.getElementById("navbar").style.fontSize = "15px";
//     document.getElementById("navbar").style.height = "60px";
//     document.getElementById("navbar").style.lineHeight = "60px";
//     document.getElementById("line").style.height = "2px";
//     document.getElementById("line").style.top = "-2px";
//   } else {
//     document.getElementById("navbar").style.fontSize = "20px";
//     document.getElementById("navbar").style.lineHeight = "90px";
//     document.getElementById("navbar").style.height = "90px";
//     document.getElementById("line").style.height = "3px";
//     document.getElementById("line").style.top = "-3px";
//   }
// }

function moreThan800() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("navbar").style.fontSize = "1.1em";
    document.getElementById("navbar").style.height = "60px";
    document.getElementById("navbar").style.lineHeight = "60px";
    document.getElementById("line").style.height = "2px";
    document.getElementById("line").style.top = "-2px";
  } else {
    document.getElementById("navbar").style.fontSize = "1.3em";
    document.getElementById("navbar").style.lineHeight = "90px";
    document.getElementById("navbar").style.height = "90px";
    document.getElementById("line").style.height = "3px";
    document.getElementById("line").style.top = "-3px";
  }
}

window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (screen.window > 0) {
    return moreThan0();
  } else if (screen.window >= 360px) {
    return moreThan360();
  } else if (screen.width >= 375px) {
    return moreThan375();
  } else if (screen.width >= 411px) {
    return moreThan411();
  } else if (screen.width >= 760px) {
    return moreThan760();
  } else if (screen.width >= 800px) {
    return moreThan800();
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

// When the user click each project, open the modal for each one
openTCModal.onclick = function () {
  tCModal.style.display = "block";
};

openDCModal.onclick = function () {
  dCModal.style.display = "block";
};

openWAModal.onclick = function () {
  wAModal.style.display = "block";
};

const closeModal = document.getElementsByClassName("close");
let i;

for (i = 0; i < closeModal.length; i++) {
  closeModal[i].addEventListener("click", function() {
    this.parentElement.parentElement.style.display = 'none';
  });
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
