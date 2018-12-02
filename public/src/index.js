import "./sass/styles.sass";
import { $, $$ } from "./modules/bling";

const bIMG = $(".front__img");
const bText = $(".front__label");
const bgpArray = ["30%", "30%", "50%"];
var frontNum = 1;

setInterval(() => {
  bIMG.style.backgroundImage = `url(https://s3.amazonaws.com/harrydry/tysonfury/fury${frontNum}.jpg)`;
  if (window.innerWidth < 701) {
    bIMG.style.backgroundPosition = bgpArray[`${frontNum - 1}`];
  }
  frontNum === 3 ? (frontNum = 1) : frontNum++;
}, 3500);

// fo

const frontOuter = $(".frontOuter");
const front = $(".front");
const fixedSection = $(".fixedSection");
console.log(fixedSection);
const container = $(".container");
let innerHeight = window.innerHeight;
frontOuter.style.top = `-${innerHeight}px`;

window.on("load", () => {
  setTimeout(() => {
    frontOuter.style.transform = `translateY(${innerHeight}px)`;
    container.style.transform = `translateY(${innerHeight}px)`;
    fixedSection.style.transform = `translateY(${innerHeight}px)`;
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
  fixedSection.style.transform = `translateY(${innerHeight}px)`;
});

window.on("scroll", () => {
  if (window.scrollY > innerHeight) {
    fixedSection.style.position = "fixed";
    fixedSection.style.transform = "translateY(0)";
    fixedSection.style.transition = "all 0s";
  } else {
    fixedSection.style.position = "relative";
    fixedSection.style.transform = `translateY(${innerHeight}px)`;
  }
});
