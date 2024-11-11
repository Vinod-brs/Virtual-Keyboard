// DOM Elements
const keys = document.querySelectorAll(".keys");
const textarea = document.querySelector("textarea");
const BackspaceBtn = document.getElementById("Backspace");
const CapsBtn = document.getElementById("Caps");
const spaceBtn = document.getElementById("space");

// Default theme
let chathams_blue = "#1A4B84";

// Init char array
let chars = [];

// for each to get the key press
keys.forEach((btn) => {
  btn.addEventListener("click", () => {
    textarea.value += btn.innerText;
    chars = textarea.value.split("");
  });
});

// Clear All button
function ClearAll(){
 chars.length = 0;
 textarea.value = chars.join("");
}

// Backspace button event
BackspaceBtn.addEventListener("click", () => {
  chars.pop();
  textarea.value = chars.join("");
});

// spacebar button event
spaceBtn.addEventListener("click", () => {
  chars.push(" ");
  textarea.value = chars.join("");
});

// Caps button event 
CapsBtn.addEventListener("click", () => {
  keys.forEach((btn) => {
    btn.classList.toggle("upper");
  });
});

// Change Theme
function setTheme(theme) {
  document.documentElement.style.setProperty("--primary-color", theme);
  localStorage.setItem("movie-theme", theme);
}
// Storing Previous Theme to Local Storage
setTheme(localStorage.getItem("movie-theme") || chathams_blue);
