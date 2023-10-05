export { createMenu };
import { space } from "./index";

function createMenu() {
  space.innerHTML = "";
  const h1 = document.createElement("h1");
  h1.textContent = "Menu";

  space.appendChild(h1);
}
