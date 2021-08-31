let buttons = document.querySelectorAll(".container> div");
let reset = document.querySelector(".selected button");
let winner = document.querySelector(".result h1");
let option = ["paper", "scissors", "rock"];
let shadow;
let playerChoice = "";
let comChoice;
let score = 12;
buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    playerChoice = btn.getAttribute("data-choice");
    comChoice = comOption();
    Compare();
    clone(btn.closest("div"));
    setTimeout(() => {
      houseSelect(comChoice);
    }, 2000);
    setTimeout(() => {
      document.querySelector(".result").style.display = "block";
      addShadow();
    }, 2000);
  });
});

function houseSelect(select) {
  document.querySelector(
    ".com-btn"
  ).innerHTML = `<div class="${select}" ><button class="btn"><img src="./images/icon-${select}.svg" /></button>  </div>`;
}

function comOption() {
  let choice = Math.floor(Math.random() * option.length);
  return option[choice];
}
function Compare() {
  if (
    (playerChoice == "paper" && comChoice == "rock") ||
    (playerChoice == "rock" && comChoice == "scissors") ||
    (playerChoice == "scissors" && comChoice == "paper")
  ) {
    shadow = "win";
    winner.innerHTML = "You Win";
  } else if (playerChoice == comChoice) {
    shadow = "draw";
    winner.innerHTML = "Draw";
  } else {
    winner.innerHTML = "You Lose";
    shadow = "lose";
  }

  document.querySelector("section").style.display = "block";
  document.querySelector(".container").style.display = "none";
}

function addShadow() {
  if (shadow === "win") {
    document.querySelector("section .player-btn").classList.toggle("winner");
    updateScore(1);
  } else if (shadow === "lose") {
    document.querySelector(".com-btn").classList.toggle("winner");
    updateScore(-1);
  }
}

function updateScore(num) {
  score += num;
  document.querySelector(".score h1").innerHTML = score;
}
reset.addEventListener("click", PlayAgain);
function PlayAgain() {
  document.querySelector(".container").style.display = "";
  document.querySelector("section .player-btn").innerHTML = "";
  document.querySelector(".com-btn").innerHTML = "";
  document.querySelector("section").style.display = "none";
  document.querySelector(".result").style.display = "none";
  document.querySelector("section .player-btn").classList.remove("winner");
  document.querySelector(".com-btn").classList.remove("winner");
}

function clone(first) {
  let player = first.cloneNode(true);
  document.querySelector(".player-btn").append(player);
}

let rulebtn = document.querySelector("aside button");
rulebtn.addEventListener("click", function () {
  document.querySelector(".rules").classList.toggle("show");
  console.log("yes");
});
