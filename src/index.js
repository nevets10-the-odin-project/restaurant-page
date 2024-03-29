import nav from "./modules/nav";
import home from "./modules/home";
import menu from "./modules/menu";
import contact from "./modules/contact";

const tabs = [home, menu, contact];

const contentEl = document.getElementById("content");

const titleEl = document.createElement("h1");
titleEl.textContent = "Heck's Kitchen";

contentEl.appendChild(titleEl);
contentEl.appendChild(nav);

const contentBodyEl = document.createElement("div");
contentBodyEl.setAttribute("id", "content-body");

contentEl.appendChild(contentBodyEl);

const buttons = document.querySelectorAll(".nav-btn");

buttons.forEach((button, index) => {
	button.addEventListener("mousedown", (e) => {
		e.preventDefault;
		switchTab(index);
	});
});

switchTab(0);

function switchTab(newIndex) {
	buttons.forEach((button, index) => {
		if (index === newIndex) {
			button.setAttribute("disabled", true);
		} else {
			button.removeAttribute("disabled");
		}
	});

	contentBodyEl.replaceChildren(tabs[newIndex]);
}
