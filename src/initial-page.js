export default buttons;

function buttons() {
  const content = document.querySelector("#content");
  
  const homeBtn = document.createElement("button");
  const menuBtn = document.createElement("button");
  const aboutBtn = document.createElement("button");
  
  homeBtn.textContent = "Home";
  menuBtn.textContent = "Menu";
  aboutBtn.textContent = "About";
  
  content.appendChild(homeBtn);
  content.appendChild(menuBtn);
  content.appendChild(aboutBtn);
}
