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
const bamn4 = $(".bamn4");

if (window.innerWidth < 730) {
  bamn1.src =
    "https://s3.eu-west-2.amazonaws.com/yeezydating/bamn/bamnmob2.jpg";
  bamn2.src =
    "https://s3.eu-west-2.amazonaws.com/yeezydating/bamn/bamnmob1.jpg";
  bamn3.src =
    "https://s3.eu-west-2.amazonaws.com/yeezydating/bamn/bamnmob3.jpg";
  bamn4.src =
    "https://s3.eu-west-2.amazonaws.com/yeezydating/bamn/closerMob.png";
}

const bIMG = $(".front__img");
const bText = $(".front__label");
const textArray = [
  "Times Square — New York",
  "Holborn — London",
  "Casper — Wyoming"
];
const bgpArray = ["44%", "70%", "87%"];
var frontNum = 1;

setInterval(() => {
  bIMG.style.backgroundImage = `url(https://s3.eu-west-2.amazonaws.com/yeezydating/bamn/bamn${frontNum}.jpg)`;
  if (window.innerWidth < 701) {
    bIMG.style.backgroundPosition = bgpArray[`${frontNum - 1}`];
  }
  bText.innerText = textArray[`${frontNum - 1}`];
  frontNum === 3 ? (frontNum = 1) : frontNum++;
}, 3500);

// fo

const frontOuter = $(".frontOuter");
const front = $(".front");
const container = $(".container");
let innerHeight = window.innerHeight;
frontOuter.style.top = `-${innerHeight}px`;

window.on("load", () => {
  setTimeout(() => {
    frontOuter.style.transform = `translateY(${innerHeight}px)`;
    container.style.transform = `translateY(${innerHeight}px)`;
  }, 300);
  setTimeout(() => {
    front.style.opacity = "1";
  }, 1000);
});

window.on("resize", () => {
  innerHeight = window.innerHeight;
  frontOuter.style.top = `-${innerHeight}px`;
  frontOuter.style.transform = `translateY(${innerHeight}px)`;
  container.style.transform = `translateY(${innerHeight}px)`;
});
