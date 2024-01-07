const navEl = document.createElement("div");
const homeBtn = document.createElement("button");
homeBtn.textContent = "Home";
navEl.appendChild(homeBtn);

const menuBtn = document.createElement("button");
menuBtn.textContent = "Menu";
navEl.appendChild(menuBtn);

const contactBtn = document.createElement("button");
contactBtn.textContent = "Contact";
navEl.appendChild(contactBtn);

export default navEl;
