import "./style.css"
import JSConfetti from 'js-confetti'

const jsConfetti = new JSConfetti()


let inputEl = document.getElementById("input-el")
let pEl = document.getElementById("p-el")

function checkAlphabet(str) {
  str = str.toLowerCase();
  for (let i = 1; i < str.length; i++) {

    if ((str.charCodeAt(i) - str.charCodeAt(i - 1)) !== 1) {
      return 0;

    }

  }
  return 1;

}

function message(str) {



  if (str.toLowerCase() === 'abcdefghijklmnopqrstuvwxyz') {
    pEl.textContent = "lessgoo, you did it!(๑>◡<๑)";
    jsConfetti.addConfetti()

  }
  else if (checkAlphabet(str) == 1) {
    pEl.textContent = "Good Job, keep going٩(ˊᗜˋ*)و ♡";

  }
  else if (str === "") {
    pEl.textContent = ""
  }
  else {
    inputEl.value = ""
    pEl.textContent = "Oops( ˶°ㅁ°) !! Try again.";
  }
}


inputEl.addEventListener("input", () => {
  message(inputEl.value)

});