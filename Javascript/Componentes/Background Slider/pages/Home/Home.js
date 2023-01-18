import "./Home.css";
import { LISTIMG } from "../../data/data";

export const createHome = () => {
    document.querySelector("#app").innerHTML = `
    <div class="slider-container">
    <button class="arrow left-arrow" id="left">
      <i class="fas fa-arrow-left"></i>
    </button>

    <button class="arrow right-arrow" id="right">
      <i class="fas fa-arrow-right"></i>
    </button>
  </div>
    `
    addListenersHome();
};

const addListenersHome = () => {

  const slides = document.querySelectorAll(".slide");
  const leftBtn = document.getElementById("left");
  const rightBtn = document.getElementById("right");

  let activeSlide = 0;

  rightBtn.addEventListener("click", () => {
    activeSlide++;

    if (activeSlide > slides.length - 1) {
      activeSlide = 0;
    }
    addList();
    setBgToBody();
    
  });

  leftBtn.addEventListener("click", () => {
    activeSlide--;

    if (activeSlide < 0) {
      activeSlide = slides.length - 1;
    }

    addList();
    setBgToBody();
  
  });

}

const addList = () => {
  LISTIMG.forEach((element, index) => {
      createSlider(element, index)
  });

}

const createSlider = (element, index) => {
  const slider = document.querySelector(".slider-container");
    slider.innerHTML += `
  <div
  class="slide ${index === 0 ? 'active': ''}"
  style="
    background-image: url('${element}');
  "
></div>
  `
  setBgToBody();
}

const setBgToBody = () => {
const body = document.body;

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove("active"));

  slides[activeSlide].classList.add("active");
}
}


