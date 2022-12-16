import {
  buttonTree,
  buttonRain,
  buttonHome,
  buttonFire,
  inputTree,
  inputRain,
  inputHome,
  inputFire,
} from "./elements.js";

export function Sounds() {
  const buttonPressAudio = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
  );
  const kitchenTimer = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
  );
  const bgAudioForest = new Audio(
    "https://github.com/madalena-rocha/focus-timer-2.0/blob/main/audio/forest.wav?raw=true"
  );
  const bgAudioRain = new Audio("../sounds/rain.wav");
  const bgAudioCoffeeShop = new Audio(
    "https://github.com/madalena-rocha/focus-timer-2.0/blob/main/audio/coffee-shop.wav?raw=true"
  );
  const bgAudioFireplace = new Audio(
    "https://github.com/madalena-rocha/focus-timer-2.0/blob/main/audio/fireplace.wav?raw=true"
  );

  bgAudioForest.loop = true;
  bgAudioRain.loop = true;
  bgAudioCoffeeShop.loop = true;
  bgAudioFireplace.loop = true;

  function pressButton() {
    buttonPressAudio.play();
  }

  function timeEnd() {
    kitchenTimer.play();
  }

  function audioTree() {
    buttonTree.classList.contains("active")
      ? bgAudioForest.play()
      : bgAudioForest.pause();
  }

  function audioRain() {
    buttonRain.classList.contains("active")
      ? bgAudioRain.play()
      : bgAudioRain.pause();
  }

  function audioHome() {
    buttonHome.classList.contains("active")
      ? bgAudioCoffeeShop.play()
      : bgAudioCoffeeShop.pause();
  }

  function audioFire() {
    buttonFire.classList.contains("active")
      ? bgAudioFireplace.play()
      : bgAudioFireplace.pause();
  }

  function setAudioVolume() {
    bgAudioForest.volume = inputTree.value;
    bgAudioRain.volume = inputRain.value;
    bgAudioCoffeeShop.volume = inputHome.value;
    bgAudioFireplace.volume = inputFire.value;
  }

  function resetTreeVolume() {
    inputTree.value = 0.5;
  }

  function resetRainVolume() {
    inputRain.value = 0.5;
  }

  function resetHomeVolume() {
    inputHome.value = 0.5;
  }

  function resetFireVolume() {
    inputFire.value = 0.5;
  }

  return {
    pressButton,
    timeEnd,
    audioTree,
    audioRain,
    audioHome,
    audioFire,
    setAudioVolume,
    resetTreeVolume,
    resetRainVolume,
    resetHomeVolume,
    resetFireVolume,
  };
}
