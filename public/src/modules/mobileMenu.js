import { $, $$ } from "./bling";

function mobileMenu() {
  const mobileMenuOpen = $(".header__menu");
  const mobileMenu = $(".mMenu");
  const mobileCross = $(".mMenu__cross");
  const flipPhone = Array.from($$(".flipPhone"));

  flipPhone.forEach(flip => {
    flip.on("click", () => {
      if ($(".merchants")) {
        mobileMenu.classList.remove("mMenu__active");
        $("body").classList.remove("noScroll");
      }
    });
  });

  mobileMenuOpen.on("click", () => {
    mobileMenu.classList.add("mMenu__active");
    $("body").classList.add("noScroll");
  });

  mobileCross.on("click", () => {
    mobileMenu.classList.remove("mMenu__active");
    $("body").classList.remove("noScroll");
  });
}

export default mobileMenu;
