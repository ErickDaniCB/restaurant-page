export { createAbout };
import { space } from "./index";

function createAbout() {
  space.innerHTML = "";
  const h1 = document.createElement("h1");
  h1.textContent = "About";

  space.appendChild(h1);
}
