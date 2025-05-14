function displayBubbles() {
  var bubbles = "";

  for (var i = 0; i <= 167; i++) {
    const random = Math.floor(Math.random() * 10);
    bubbles += `<div id="bubble"> ${random} </div>`;
  }

  document.querySelector("#play-area").innerHTML = bubbles;
}

var timer = 60;
function runtimer() {
 var timerint =  setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector(".timer-start").textContent = timer;
    }
    else{
        clearInterval(timerint)
    }
  }, 1000);
}
runtimer();
displayBubbles();
