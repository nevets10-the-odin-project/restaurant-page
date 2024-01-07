import nav from "./modules/nav";
import home from "./modules/home";
import menu from "./modules/menu";
import contact from "./modules/contact";

const tabs = [home, menu, contact];

const contentEl = document.getElementById("content");
contentEl.appendChild(nav);

const contentBodyEl = document.createElement("div");
contentBodyEl.setAttribute("id", "content-body");

contentEl.appendChild(contentBodyEl);

switchTab(0);

const buttons = document.querySelectorAll(".nav-btn");

buttons.forEach((button, index) => {
	button.addEventListener("mousedown", (e) => {
		e.preventDefault;
		switchTab(index);
	});
});

function switchTab(index) {
	contentBodyEl.replaceChildren(tabs[index]);
}
