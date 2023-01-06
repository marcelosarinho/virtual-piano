function triggerDarkMode() {
  count++;
  if (count % 2 != 0) {
    body.style.backgroundColor = `black`;
    body.style.color = `white`;
  } else {
    body.style.backgroundColor = `white`;
    body.style.color = `black`;
  } 
}

function playNote(e) {
  console.log(e);
}

const darkModeButton = document.querySelector(".dark-mode-button");
const body = document.querySelector("body");
const whiteKeys = Array.from(document.querySelectorAll(".white-key"));
whiteKeys.forEach(whiteKey => whiteKey.addEventListener("onkeydown", playNote));
const blackKeys = Array.from(document.querySelectorAll(".black-key"));
blackKeys.forEach(blackKey => blackKey.addEventListener("onkeydown", playNote));
window.addEventListener("keydown", playNote)

let count = 0;

darkModeButton.addEventListener("click", triggerDarkMode);