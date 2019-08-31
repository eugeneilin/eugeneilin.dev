// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUurcDE43sFoXhuNJFKm4E6vZmn7iwYJU",
  authDomain: "portfolio-website-ad519.firebaseapp.com",
  databaseURL: "https://portfolio-website-ad519.firebaseio.com",
  projectId: "portfolio-website-ad519",
  storageBucket: "gs://portfolio-website-ad519.appspot.com",
  messagingSenderId: "735375370557",
  appId: "1:735375370557:web:f3cd6e2593b81d03"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

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

// Get each project modal
const tCModal = document.getElementById("temp-converter-modal");
const dCModal = document.getElementById("digital-clock-modal");
const wAModal = document.getElementById("wedding-website-modal");

// Get each project
const openTCModal = document.getElementById("open-tc-modal");
const openDCModal = document.getElementById("open-dc-modal");
const openWAModal = document.getElementById("open-ww-modal");

// When the user clicks each project, open the modal for each one, prevent scrolling of the body, and add padding-right to body
openTCModal.onclick = function () {
  tCModal.style.display = "block";
  document.body.style.overflowY = 'hidden';
  document.body.style.paddingRight = '10px';
  document.getElementById('navigation').style.paddingRight = '10px';
};

openDCModal.onclick = function () {
  dCModal.style.display = "block";
  document.body.style.overflowY = 'hidden';
  document.body.style.paddingRight = '10px';
  document.getElementById('navigation').style.paddingRight = '10px';
};

openWAModal.onclick = function () {
  wAModal.style.display = "block";
  document.body.style.overflowY = 'hidden';
  document.body.style.paddingRight = '10px';
  document.getElementById('navigation').style.paddingRight = '10px';
};

// close the modal for each project and resume body scrolling
const closeModal = document.getElementsByClassName("close");
let i;

for (i = 0; i < closeModal.length; i++) {
  closeModal[i].addEventListener("click", function () {
    this.parentElement.parentElement.parentElement.style.display = 'none';
    document.body.style.overflowY = '';
    document.body.style.paddingRight = '';
    document.getElementById('navigation').style.paddingRight = '';
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
    document.getElementById('wedding-website-modal').style.display = 'none';
    document.body.style.overflowY = '';
    document.body.style.paddingRight = '';
    document.getElementById('navigation').style.paddingRight = '';

  } else {
    document.getElementById('temp-converter-modal').style.display = '';
    document.getElementById('digital-clock-modal').style.display = '';
    document.getElementById('wedding-website-modal').style.display = '';
  }
};

// Display different footer text
const copyright = document.getElementById('copyright');
const author = document.getElementById('author');

function displayAuthor() {
  if ((copyright.style.display = 'block') && (author.style.display = 'none')) {
    copyright.style.display = 'none';
    author.style.display = 'block';
  }
}
function displayCopyright() {
  if ((copyright.style.display = 'none') && (author.style.display = 'block')) {
    copyright.style.display = 'block';
    author.style.display = 'none';
  }
}

// Firebase
// Reference messages collection
const messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contact-form').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  const name = getInputVal('name');
  const email = getInputVal('email');
  const message = getInputVal('message');

  // Save message
  saveMessage(name, email, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert in 10 seconds
  setTimeout(function () {
    document.querySelector('.alert').style.display = 'none';
  }, 10000);

  // Reset form
  document.getElementById('contact-form').reset();
}

// Function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message) {
  const newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    message: message
  });
}
