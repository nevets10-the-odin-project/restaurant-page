import nav from "./nav";

const mainEl = document.createElement("div");

const titleEl = document.createElement("h1");
titleEl.textContent = "Heck's Kitchen";
mainEl.appendChild(titleEl);

mainEl.appendChild(nav);

const aboutContainer = document.createElement("div");

const aboutTitle = document.createElement("h2");
aboutTitle.textContent = "About Us";
aboutContainer.appendChild(aboutTitle);

const aboutText = document.createElement("p");
aboutText.textContent =
	"Bacon ipsum dolor amet chuck pastrami rump, ham hock meatloaf tongue ball tip pig. Frankfurter salami kielbasa prosciutto drumstick jerky jowl alcatra. Beef ribs alcatra tail fatback cupim, rump burgdoggen strip steak ham. Pork chop flank brisket shoulder bacon cow chislic swine buffalo jowl tri-tip short ribs hamburger doner spare ribs. Chislic salami flank fatback. Tri-tip capicola tenderloin pork chop shank beef ribs pancetta pastrami jerky.";
aboutContainer.appendChild(aboutText);

mainEl.appendChild(aboutContainer);

const hoursContainer = document.createElement("div");
const hoursTitle = document.createElement("h2");
hoursTitle.textContent = "Hours";
hoursContainer.appendChild(hoursTitle);

const HoursList = document.createElement("ul");
const hoursArray = [
	"Sunday: 8:00am - 8:00pm",
	"Monday: 8:00am - 8:00pm",
	"Tuesday: 8:00am - 8:00pm",
	"Wednesday: 8:00am - 8:00pm",
	"Thursday: 8:00am - 8:00pm",
	"Friday: 8:00am - 10:00pm",
	"Saturday: 8:00am - 10:00pm",
];

hoursArray.forEach((hour) => {
	const liEl = document.createElement("li");
	liEl.textContent = hour;

	HoursList.appendChild(liEl);
});

hoursContainer.appendChild(HoursList);

mainEl.appendChild(hoursContainer);

const imgContainer = document.createElement("div");
const image = document.createElement("img");
image.setAttribute("id", "fire");
image.setAttribute("alt", `Fire saying "This is fine."`);
image.setAttribute("src", "../src/img/fire.png");

imgContainer.appendChild(image);

mainEl.appendChild(imgContainer);

export default mainEl;
