//az időzítőért felelős programrész

let timer;
let sec = 0;
let min = 0;

function pad(val) {
  return val > 9 ? val : "0" + val;
}

document.getElementById("startButton").addEventListener("click", function () {
  timer = setInterval(function () {
    document.getElementById("seconds").innerHTML = pad(++sec % 60);
    document.getElementById("minutes").innerHTML = pad(parseInt(sec / 60, 10));
  }, 1000);
});

// A tippek begyüjtéséért és megjelenítésért felelős kódrész
let wrongAnswers = [];

document.getElementById("myForm").addEventListener("submit", function (event) {
  // Megakadályozzuk az alapértelmezett form küldési műveletet
  event.preventDefault();

  let userInput = document.getElementById("userInput").value;

  if (userInput !== "R") {
    if (wrongAnswers.length < 20) {
      wrongAnswers.push(userInput);
      let wrongAnswersDiv = document.getElementById("wrong-answers");
      let newP = document.createElement("p");
      newP.textContent = userInput;
      wrongAnswersDiv.appendChild(newP);
    }
    document.getElementById("userInput").value = "";
  } else {
    alert("Helyes válasz!");
  }
  if (wrongAnswers.length == 20) {
    alert("GAME OVER!");
    location.reload();
  }
});
