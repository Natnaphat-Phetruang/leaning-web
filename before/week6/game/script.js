let machinNumber = generateRandomNumber();
let score = 10;
let highscore = 0;
console.log(machinNumber);
document.querySelector(".check").addEventListener("click", () => {
  const userNumber = Number(document.querySelector(".guess").value);

  if (userNumber === machinNumber) {
    document.querySelector(".message").textContent = "You Win!";
    document.querySelector(".secret").innerHTML = machinNumber;
    resetGame();
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore.toString();
    }
  } else if (userNumber > machinNumber) {
    if (score <= 1) {
      document.querySelector(".message").textContent = "You lose!";
      score = 0;
    } else {
      score--;
      document.querySelector(".message").textContent = "Too high";
    }
  } else if (userNumber < machinNumber) {
    if (score <= 1) {
      document.querySelector(".message").textContent = "You lose!";
      score = 0;
    } else {
      score--;
      document.querySelector(".message").textContent = "Too low";
    }
  }

  document.querySelector(".score").textContent = score.toString();
});

document.querySelector(".REre.check").addEventListener("click", () => {
  resetGame();
  console.log(machinNumber);
  document.querySelector(".secret").innerHTML = "?";
});

function resetGame() {
  score = 10;
  machinNumber = generateRandomNumber();
  document.querySelector(".score").textContent = score.toString();
  document.querySelector(".message").textContent = "Let's play!";
  document.querySelector(".guess").value = "";
}

function generateRandomNumber() {
  return Math.ceil(Math.random() * 21);
}
