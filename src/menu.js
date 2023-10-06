export { createMenu };
import { space } from "./index";
import tacosImg from './food-pics/tacos-by-JeswinThomas.jpg';
import quesaImg from './food-pics/quesadilla-by-FernandoAndrade.jpg';

function createMenu() {
  space.innerHTML = "";
  const h1 = document.createElement("h1");
  h1.textContent = "Menu";
  space.appendChild(h1);

  displayFoods();
}

const menu = [];

class dish {
  constructor(name, cost, img) {
    this.dishName = name;
    this.dishCost = cost;
    this.dishImg = img;
  }
}

menu.push(new dish("Tacos", "$3", tacosImg));
menu.push(new dish("Quesadilla", "$4", quesaImg));

function displayFoods() {
  menu.forEach((dish) => {
    const div = document.createElement("div");
    const name = document.createElement("h3");
    const cost = document.createElement("h3");
    const img = new Image(100, 100);
    
    name.textContent = dish.dishName;
    cost.textContent = dish.dishCost;
    img.src = dish.dishImg;

    div.appendChild(name);
    div.appendChild(cost);
    div.appendChild(img);

    space.appendChild(div);
  });
}
