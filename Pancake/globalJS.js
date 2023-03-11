const inputChangeMode = document.getElementById("switch-btn");

inputChangeMode.addEventListener("change", () => {
  const mode = inputChangeMode.checked;

  //GLOBAL DARK:
  const btns = document.querySelectorAll("button");

  //
  //HERO_SECTION_DARK-----------------------------------
  const herobg = document.querySelector(".hero-section");
  const herop = document.querySelector(".hero-homepage-text-parag");
  const heroWave = document.getElementById("hero-wave");
  //ORANGE_SECTION_DARK
  const OrangeSection = document.querySelector(".orange-section")
  const OrangeSectionDark = document.querySelector(".orange-section-dark")

  //DARK
  if (mode === true) {
    //GLOBAL DARK:

    btns.forEach((btn) => {
      btn.classList.replace("btn", "btn-dark");
      btn.classList.replace("btn-square", "btn-square-dark");
    });

    //HERO_SECTION_DARK

    const herobg = document.querySelector(".hero-section");
    const herop = document.querySelector(".hero-homepage-text-parag");

    herobg.classList.add("hero-section-dark");
    herop.classList.add("hero-homepage-text-parag-dark");
    heroWave.src = "./Components/HeroSection/images/wave-bg-d.svg";

    //ORANGE_SECTION_DARK
    OrangeSection.classList.add("orange-section-dark");
    OrangeSection.classList.remove("orange-section");

    //LIGHT
  } else if (mode === false) {
    //GLOBAL LIGHT:
    btns.forEach((btn) => {
      btn.classList.replace("btn-dark", "btn");
      btn.classList.replace("btn-square-dark", "btn-square");
    });

    //HERO_SECTION_LIGHT
    herobg.classList.remove("hero-section-dark");
    herop.classList.remove("hero-homepage-text-parag-dark");
    heroWave.src = "./Components/HeroSection/images/wave-bg.svg";


    //ORANGE_SECTION_LIGHT
    OrangeSectionDark.classList.remove("orange-section-dark");
    OrangeSectionDark.classList.add("orange-section");
  }
});
