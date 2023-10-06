export { createHome };
import { space } from "./index";

function createHome() {
  space.innerHTML = "";

  const h1 = document.createElement("h1");
  h1.textContent = "Home";

  const greeting = document.createElement('p');
  greeting.textContent = "Sean bienvenidos a las mejores garnachas del país"

  space.appendChild(h1);
  space.appendChild(greeting);
}

