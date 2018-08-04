import "./sass/styles.sass";
import { $, $$ } from "./modules/bling";

const mobilePlay = $(".interview__icon");
const audio = $(".audio");
const timer = $(".interview__text");

mobilePlay.on("click", () => {
  if (!audio.paused) {
    audio.pause();
  } else {
    audio.play();
    setInterval(() => {
      const time = Math.floor(audio.currentTime);
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      if (seconds < 10) {
        var insertTime = ` ${minutes}:0${seconds}`;
      } else {
        var insertTime = ` ${minutes}:${seconds}`;
      }
      timer.innerHTML = insertTime;
    }, 500);
  }
});

const bamn1 = $(".bamn1");
const bamn2 = $(".bamn2");
const bamn3 = $(".bamn3");

if (window.innerWidth < 730) {
  bamn1.src =
    "https://s3.eu-west-2.amazonaws.com/yeezydating/bamn/bamnmob1.jpg";
  bamn2.src =
    "https://s3.eu-west-2.amazonaws.com/yeezydating/bamn/bamnmob3.jpg";
  bamn3.src =
    "https://s3.eu-west-2.amazonaws.com/yeezydating/bamn/bamnmob2.jpg";
}
