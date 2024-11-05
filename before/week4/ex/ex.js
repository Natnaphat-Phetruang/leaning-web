document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("title");

  const Description = document.querySelector(".Descriotion");
  console.log(Description);
  const chgTxtBtn = document.getElementById("ChangTextBtn");
  chgTxtBtn.addEventListener("click", () => {
    title.textContent = "Hack Dom😈";
    Description.textContent = "BY เเฮกเกอร์์์์์์";
  });

  const CTB = document.getElementById("chagetext");
  CTB.addEventListener("click", () => {
    title.textContent = "abc";
    descript.textContent = "by bye";
  });

  const tgClsBtn = document.getElementById("toggle ClassBtn");
  tgClsBtn.addEventListener("click", () => {
    Description.classList.toggle("active");
    if (Description.classList.contains("active")) {
      Description.style.color = "green";
    } else {
      Description.style.color = "Black";
    }
  });

  const Link = Document.getElementById("link");
  Link.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Error");
  });

  const GameArea = document.getElementById("GameArea");
  const scoreBoard = document.getElementById("score");
  const startBtn = document.getElementById("startBtn");
  let score = 0;

  startBtn.addEventListener("Click", () => {
    score = 0;
    scoreBoard.textContent = score;
    startgame();
  });
  const startgame = () => {
    const coin = createCoin();
    GameArea.appendChild(coin);

    coin.addEventListener("click", () => {
      score++;
      scoreBoard.textContent = score;
      GameArea.removeChild(coin);
      startgame();
    });
  };
  const createCoin = () => {
    const coin = document.createElement("div");
    coin.classList.add("coin");
    coin.style.top = Math.random() * (GameArea.offsetHeight - 30) + "px";
    coin.style.left = Math.random() * (GameArea.offsetWidth - 30) + "px";
    return coin;
  };
});
