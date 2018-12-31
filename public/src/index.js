import "./sass/styles.sass";
import { $, $$ } from "./modules/bling";
import aboutFunction from "./modules/about";
import mobileMenu from "./modules/mobileMenu";
import Animate from "animate.js";
import "./modules/header";
header;
import {
  faqFunction,
  radioFunction,
  wideFunction,
  formSubmit,
  zenscrollFunction
} from "./modules/merchant";

var animate = new Animate({
  target: "[data-animate]",
  animatedClass: "visible",
  offset: [0.66],
  delay: 0,
  remove: false,
  reverse: true,
  scrolled: false,
  debug: true,
  onLoad: true,
  onScroll: true,
  onResize: false,
  callbackOnInit: function() {
    console.log("Initialised");
  },
  callbackOnInView: function(element) {
    var animationType = element
      .getAttribute("data-animation-classes")
      .replace("animated", "")
      .trim();
    console.log(animationType + " in view.");
  },
  callbackOnAnimate: function(element) {
    console.log(element);
  }
});

animate.init();
animate.render();

if ($(".merchants")) {
  faqFunction();
  wideFunction();
  radioFunction();
  formSubmit();
  zenscrollFunction();
}

if ($(".aboutSVG")) {
  aboutFunction();
}

if (window.innerWidth <= 1023) {
  mobileMenu();
}
