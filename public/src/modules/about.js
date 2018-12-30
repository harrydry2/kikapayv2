import { $, $$ } from "./bling";

function aboutFunction() {
  const clickbioArray = Array.from($$(".tSpec__bio"));
  clickbioArray.forEach(clickbio => {
    clickbio.on("click", () => {
      const chevron = clickbio.querySelector(".tSpec__bio-chevron");
      var bio = clickbio.previousSibling.previousSibling;
      bio.classList.toggle("tSpec__bottomouter-active");
      chevron.classList.toggle("tSpec__bio-chevron-rotate");
    });
  });
}

export default aboutFunction;
