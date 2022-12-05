import "./Home.css";
import { createNav } from "../Navbar/Navbar";

export const createHome = () => {
  document.querySelector("#app").innerHTML = `
    <button class="nav-btn open-btn">
    <i class="fas fa-bars"></i>
    </button>
  <img
    src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
    alt="Logo" class="logo">
  <p class="text">Mobile Navigation</p>
  <div class="nav nav-black">
    <div class="nav nav-red">
      <div class="nav nav-white">
        <button class="nav-btn close-btn">
          <i class="fas fa-times"></i>
        </button>
        <img
          src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
          alt="Logo" class="logo">

        <ul class="list">
        </ul>
      </div>
    </div>
  </div>
    `;
  addListenersHome();
};

const addListenersHome = () => {
  const open_btn = document.querySelector(".open-btn");
  const nav = document.querySelectorAll(".nav");

  open_btn.addEventListener("click", () => {
    nav.forEach((nav_el) => nav_el.classList.add("visible"))
    createNav();
  });
  

};
