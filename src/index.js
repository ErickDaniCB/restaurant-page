export { space };
import './styles.css';
import { createAbout } from "./about";
import { createHome } from "./home";
import { createMenu } from "./menu";

const content = document.querySelector("#content");

const title = document.createElement("h1");
title.textContent = "Gar-nachas";

const nav = document.createElement("div");

const space = document.createElement("div");

content.appendChild(title);
content.appendChild(nav);
content.appendChild(space);

const homeBtn = document.createElement("button");
const menuBtn = document.createElement("button");
const aboutBtn = document.createElement("button");

homeBtn.textContent = "Home";
homeBtn.addEventListener("click", createHome);
homeBtn.setAttribute("id", "home-btn");

menuBtn.textContent = "Menu";
menuBtn.addEventListener("click", createMenu);
menuBtn.setAttribute("id", "menu-btn");

aboutBtn.textContent = "About";
aboutBtn.addEventListener("click", createAbout);
aboutBtn.setAttribute("id", "about-btn");

nav.appendChild(homeBtn);
nav.appendChild(menuBtn);
nav.appendChild(aboutBtn);

createHome();