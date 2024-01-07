import nav from "./nav";

const mainEl = document.createElement("div");

const titleEl = document.createElement("h1");
titleEl.textContent = "Menu";
mainEl.appendChild(titleEl);

mainEl.appendChild(nav());

export default mainEl;
