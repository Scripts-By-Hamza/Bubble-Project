var timer = 60;
var hitRandom;
var score = 0;
var timerint;
var correctClick = score / 10;

function increaseScore() {
  score += 10;
  document.querySelector(".score-val").textContent = score;
}

function getNewHit() {
  hitRandom = Math.floor(Math.random() * 10);
  document.querySelector(".hit-val").textContent = hitRandom;
}

function displayBubbles() {
  var bubbles = "";
  for (var i = 0; i <= 167; i++) {
    const random = Math.floor(Math.random() * 10);
    bubbles += `<div id="bubble"> ${random} </div>`; // changed from id to class
  }
  document.querySelector("#play-area").innerHTML = bubbles;
}

function runtimer() {
  timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector(".timer-start").textContent = timer;
    } else {
      clearInterval(timerint);
      document.querySelector(
        "#play-area"
      ).innerHTML = `<h1>Time's Up! Your Score is ${score}. <br> Refresh To Start Again. </h1>`;
    }
  }, 1000);
}

document.querySelector("#play-area").addEventListener("click", function (dets) {
  var clickedNum = parseInt(dets.target.textContent);
  if (clickedNum === hitRandom) {
    increaseScore();
    displayBubbles();
    getNewHit();
  } else {
    clearInterval(timerint);
    document.querySelector(
      "#play-area"
    ).innerHTML = `<h1>Game Over 😖  <br> Your Score is ${score}. <br> Refresh To Start Again. </h1>`;
    document.querySelector(".timer-start").textContent = 0;
  }
});

getNewHit();
displayBubbles();
runtimer();
