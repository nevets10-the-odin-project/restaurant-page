import home from "./modules/home";
import menu from "./modules/menu";
import contact from "./modules/contact";

let currentIndex = 0;
const tabs = [home, menu, contact];

const contentEl = document.getElementById("content");
contentEl.appendChild(tabs[currentIndex]);

const buttons = document.querySelectorAll(".nav-btn");

buttons.forEach((button, index) => {
	if (index === currentIndex) {
		button.setAttribute("disabled", "");
	}
});
