import { Sounds } from "./sounds.js";

export function Timer({ minutesDisplay, secondsDisplay, resetControls }) {
  let timerTimeOut;
  let minutes = Number(minutesDisplay.textContent);

  function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  }

  function reset() {
    updateTimerDisplay(minutes, 0);
    clearTimeout(timerTimeOut);
  }

  function countDown() {
    timerTimeOut = setTimeout(() => {
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);
      let isFinished = minutes <= 0 && seconds <= 0;

      updateTimerDisplay(minutes, 0);

      if (isFinished) {
        resetControls();
        updateTimerDisplay(minutes, 0);
        Sounds().timeEnd();
        return;
      }

      if (seconds <= 0) {
        seconds = 60;
        --minutes;
      }

      updateTimerDisplay(minutes, String(seconds - 1));

      countDown();
    }, 1000);
  }

  function hold() {
    clearTimeout(timerTimeOut);
  }

  function plus() {
    minutes += 5;
    reset();
  }

  function minus() {
    minutes >= 5 ? (minutes -= 5) : (minutes = 0);
    reset();
  }

  return {
    updateTimerDisplay,
    reset,
    countDown,
    hold,
    plus,
    minus,
  };
}
