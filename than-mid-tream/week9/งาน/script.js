const apiUrl = "https://www.themealdb.com/api/json/v1/1/";
const defaultMenu = document.querySelector("#menu");
const orderList = document.getElementById("order-list");
const totalPrice = document.getElementById("total-price");
const clearOrderBtn = document.getElementById("clear-order");

class OrderManager {
  constructor() {
    this.total = 0;
    this.loadData();
    clearOrderBtn.addEventListener("click", () => this.clearOrder());
  }

  async fetchMealData(category) {
    try {
      const response = await fetch(apiUrl + "filter.php?c=" + category);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async createMenu(category) {
    try {
      const mealData = await this.fetchMealData(category);
      const mealItems = mealData.meals.slice(0, 4).map((meal) => ({
        name: meal.strMeal,
        picture: meal.strMealThumb,
        price: Math.floor(Math.random() * 100) * 3,
      }));
      const menuItemsHTML = mealItems
        .map(
          (meal) => `
            <div class="menu-item">
              <p class="name">${meal.name}</p>
              <img src="${meal.picture}" alt="${meal.name}">
              <p class="price">${meal.price}$</p>
              <button type="button" class="add-menu">+</button>
            </div>`
        )
        .join("");
      defaultMenu.insertAdjacentHTML("beforeend", menuItemsHTML);
      this.addMenuHandler();
    } catch (error) {
      console.error("Error creating menu:", error);
    }
  }

  addMenuHandler() {
    const addMenuButtons = document.querySelectorAll(".add-menu");
    addMenuButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const menuItem = event.target.closest(".menu-item");
        const name = menuItem.querySelector(".name").textContent;
        const price = parseInt(menuItem.querySelector(".price").textContent);
        this.addMenu(name, price);
      });
    });
  }

  addMenu(name, price) {
    this.total += price;
    this.updateLocalStorage(name, price);
    this.loadData();
    totalPrice.textContent = `$${this.total}`;
    console.log(this.total);
  }

  clearOrder() {
    localStorage.clear();
    this.loadData();
    this.total = 0;
    totalPrice.textContent = "$0";
  }

  removeItem(key, value) {
    localStorage.removeItem(key);
    this.total -= value;
    totalPrice.textContent = `$${this.total}`;
    this.loadData();
  }

  loadData() {
    orderList.innerHTML = "";
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = parseInt(localStorage.getItem(key));
      const div = document.createElement("div");
      div.textContent = `Menu: ${key} Piece: ${value}`;
      const removeButton = document.createElement("button");
      removeButton.textContent = " ❌ ";
      removeButton.addEventListener("click", () => {
        this.removeItem(key, value);
      });
      div.appendChild(removeButton);
      orderList.appendChild(div);
    }
  }

  updateLocalStorage(key, value) {
    if (localStorage.getItem(key) !== null) {
      let currentValue = parseInt(localStorage.getItem(key));
      let newValue = currentValue + value;
      localStorage.setItem(key, newValue.toString());
    } else {
      localStorage.setItem(key, value.toString());
    }
  }
}

const orderManager = new OrderManager();
orderManager.createMenu("Beef");
orderManager.createMenu("Chicken");
orderManager.createMenu("dessert");
orderManager.createMenu("breakfast");
