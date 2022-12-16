import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonAddTime,
  buttonDrecrementTime,
  body,
  buttonDarkMode,
  buttonLightMode,
  buttonTree,
  buttonRain,
  buttonHome,
  buttonFire,
  inputTree,
  inputRain,
  inputHome,
  inputFire,
} from "./elements.js";

export function Events({ controls, timer, sound }) {
  buttonPlay.addEventListener("click", () => {
    controls.play();
    timer.countDown();
    sound.pressButton();
  });

  buttonPause.addEventListener("click", () => {
    controls.pause();
    timer.hold();
    sound.pressButton();
  });

  buttonStop.addEventListener("click", () => {
    controls.reset();
    timer.reset();
    sound.pressButton();
  });

  buttonAddTime.addEventListener("click", () => {
    timer.plus();
    controls.reset();
    timer.reset();
    sound.pressButton();
  });

  buttonDrecrementTime.addEventListener("click", () => {
    timer.minus();
    controls.reset();
    timer.reset();
    sound.pressButton();
  });

  buttonDarkMode.addEventListener("click", () => {
    buttonDarkMode.classList.toggle("hide");
    buttonLightMode.classList.toggle("hide");
    body.classList.toggle("darkmode");
    sound.pressButton();
  });

  buttonLightMode.addEventListener("click", () => {
    buttonDarkMode.classList.toggle("hide");
    buttonLightMode.classList.toggle("hide");
    body.classList.toggle("darkmode");
    sound.pressButton();
  });

  buttonTree.addEventListener("click", () => {
    buttonTree.classList.toggle("active");
    sound.audioTree();
    sound.pressButton();
  });

  buttonRain.addEventListener("click", () => {
    buttonRain.classList.toggle("active");
    sound.audioRain();
    sound.pressButton();
  });

  buttonHome.addEventListener("click", () => {
    buttonHome.classList.toggle("active");
    sound.audioHome();
    sound.pressButton();
  });

  buttonFire.addEventListener("click", () => {
    buttonFire.classList.toggle("active");
    sound.audioFire();
    sound.pressButton();
  });

  inputTree.addEventListener("input", sound.setAudioVolume);
  inputRain.addEventListener("input", sound.setAudioVolume);
  inputHome.addEventListener("input", sound.setAudioVolume);
  inputFire.addEventListener("input", sound.setAudioVolume);
}
