import { Controls } from "./controls.js";
import { Timer } from "./timer.js";
import { Sounds } from "./sounds.js";
import { Events } from "./events.js";
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonAddTime,
  buttonDrecrementTime,
  minutesDisplay,
  secondsDisplay,
} from "./elements.js";

const controls = Controls({
  buttonPlay,
  buttonPause,
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
});

const sound = Sounds();

Events({ controls, timer, sound });
