let grid = document.getElementById("grid");
let scoreDisplay = document.getElementById("score");
let timerDisplay = document.getElementById("timer");
let score = 0;
let timeLeft = 30;
let currentActive = null;
// create 9 boxes
for (let i = 0; i < 9; i++) {
  let box = document.createElement("div");
  box.className = "box";
  // click logic
  box.onclick = function () {
    if (box === currentActive) {
      score = score + 1;
      scoreDisplay.innerText = score;

      box.classList.remove("active");
      currentActive = null;
    }
  };
  grid.appendChild(box);
}
let boxes = document.querySelectorAll(".box");
// function to activate random box
function activateBox() {
  // remove old active
  if (currentActive != null) {
    currentActive.classList.remove("active");
  }
  let randomIndex = Math.floor(Math.random() * 9);
  let box = boxes[randomIndex];
  box.classList.add("active");
  currentActive = box;
  // deactivate after 1 second
  setTimeout(function () {
    if (currentActive === box) {
      box.classList.remove("active");
      currentActive = null;
    }
  }, 1000);
}
// run every 2 seconds
let gameLoop = setInterval(activateBox, 2000);
// timer countdown
let timer = setInterval(function () {
  timeLeft = timeLeft - 1;
  timerDisplay.innerText = "Time: " + timeLeft;
  if (timeLeft === 0) {
    clearInterval(timer);
    clearInterval(gameLoop);
    if (currentActive != null) {
      currentActive.classList.remove("active");
    }
    alert("Game Over! Score: " + score);
  }
}, 1000);
