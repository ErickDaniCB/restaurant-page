export { createMenu };
import { space } from "./index";

function createMenu() {
  space.innerHTML = "";
  const h1 = document.createElement("h1");
  h1.textContent = "Menu";
  space.appendChild(h1);

  displayFoods();
}

const menu = [];

class dish {
  constructor(name, cost) {
    this.dishName = name;
    this.dishCost = cost;
  }
}

menu.push(new dish("Tacos", "$3"));
menu.push(new dish("Quesadilla", "$4"));

function displayFoods() {
  menu.forEach((dish) => {
    const div = document.createElement("div");
    const name = document.createElement("h3");
    const cost = document.createElement("h3");

    name.textContent = dish.dishName;
    cost.textContent = dish.dishCost;

    div.appendChild(name);
    div.appendChild(cost);

    space.appendChild(div);
  });
}
