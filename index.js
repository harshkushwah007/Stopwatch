const timerE1 = document.getElementById("numbers");
const startE1 = document.getElementById("start");
const stopE1 = document.getElementById("stop");
const resetE1 = document.getElementById("reset");

let startTime = 0;
let elapsedTime = 0;
let timeInterval;

function startTimer() {
  startTime = Date.now() - elapsedTime;

  timeInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timerE1.textContent = formatTime(elapsedTime);
  }, 10);

  startE1.disabled = true;
  stopE1.disabled = false;
}

function formatTime(elapsedTime) {
  const milliSeconds = Math.floor((elapsedTime % 1000) / 10);
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));

  return (
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
    "." +
    (milliSeconds > 9 ? milliSeconds : "0" + milliSeconds)
  );
}

function stopTimer() {
  clearInterval(timeInterval);
  startE1.disabled = false;
  stopE1.disabled = true;
}

function resetTimer() {
  clearInterval(timeInterval);

  elapsedTime = 0;
  timerE1.textContent = "00:00:00";

  startE1.disabled = false;
  stopE1.disabled = true;
}

startE1.addEventListener("click", startTimer);
stopE1.addEventListener("click", stopTimer);
resetE1.addEventListener("click", resetTimer);
