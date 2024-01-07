const mainDiv = document.createElement("div");

const titleEl = document.createElement("h1");
titleEl.textContent = "Heck's Kitchen";
mainDiv.appendChild(titleEl);

const aboutEl = document.createElement("div");

const titleEl1 = document.createElement("h2");
titleEl1.textContent = "About Us";
aboutEl.appendChild(titleEl1);

const textEl1 = document.createElement("p");
textEl1.textContent =
	"Bacon ipsum dolor amet chuck pastrami rump, ham hock meatloaf tongue ball tip pig. Frankfurter salami kielbasa prosciutto drumstick jerky jowl alcatra. Beef ribs alcatra tail fatback cupim, rump burgdoggen strip steak ham. Pork chop flank brisket shoulder bacon cow chislic swine buffalo jowl tri-tip short ribs hamburger doner spare ribs. Chislic salami flank fatback. Tri-tip capicola tenderloin pork chop shank beef ribs pancetta pastrami jerky.";
aboutEl.appendChild(textEl1);

mainDiv.appendChild(aboutEl);

const hoursEl = document.createElement("div");
const titleEl2 = document.createElement("h2");
titleEl2.textContent = "Hours";
hoursEl.appendChild(titleEl2);

const hourListEl = document.createElement("ul");
const hourArray = [
	"Sunday: 8:00am - 8:00pm",
	"Monday: 8:00am - 8:00pm",
	"Tuesday: 8:00am - 8:00pm",
	"Wednesday: 8:00am - 8:00pm",
	"Thursday: 8:00am - 8:00pm",
	"Friday: 8:00am - 10:00pm",
	"Saturday: 8:00am - 10:00pm",
];

hourArray.forEach((hour) => {
	const liEl = document.createElement("li");
	liEl.textContent = hour;

	hourListEl.appendChild(liEl);
});

hoursEl.appendChild(hourListEl);

mainDiv.appendChild(hoursEl);

const imgContainer = document.createElement("div");
const imgEl = document.createElement("img");
imgEl.setAttribute("id", "fire");
imgEl.setAttribute("alt", `Fire saying "This is fine."`);
imgEl.setAttribute("src", "../src/img/fire.png");

imgContainer.appendChild(imgEl);

mainDiv.appendChild(imgContainer);

export default mainDiv;
