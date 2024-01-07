export default function nav() {
	const navEl = document.createElement("div");
	const homeBtn = document.createElement("button");
	homeBtn.textContent = "Home";
	homeBtn.setAttribute("class", "nav-btn");
	navEl.appendChild(homeBtn);

	const menuBtn = document.createElement("button");
	menuBtn.textContent = "Menu";
	menuBtn.setAttribute("class", "nav-btn");
	navEl.appendChild(menuBtn);

	const contactBtn = document.createElement("button");
	contactBtn.textContent = "Contact";
	contactBtn.setAttribute("class", "nav-btn");
	navEl.appendChild(contactBtn);

	return navEl;
}
