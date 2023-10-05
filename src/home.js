export { createHome };
import { space } from "./index";

function createHome() {
  space.innerHTML = "";
  const h1 = document.createElement("h1");
  h1.textContent = "Home";

  space.appendChild(h1);
}
