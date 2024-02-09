var interval;
var timeInSeconds = 300;

function updateTimerDisplay() {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;
  document.getElementById("timer").innerText = formattedTime;
}

function startTimer() {
  interval = setInterval(function () {
    if (timeInSeconds > 0) {
      timeInSeconds--;
      updateTimerDisplay();
    } else {
      clearInterval(interval);
      document.body.style.backgroundColor = "#e74c3c";
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  clearInterval(interval);
  timeInSeconds = 300;
  document.body.style.backgroundColor = "#3498db";
  updateTimerDisplay();
}
