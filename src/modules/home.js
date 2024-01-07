const mainDiv = document.createElement("div");

const titleEl = document.createElement("h1");
titleEl.textContent = "Heck's Kitchen";
mainDiv.appendChild(titleEl);

const aboutEl = document.createElement("div");
const titleEl1 = document.createElement("h2");
titleEl1.textContent = "About Us";

const textEl1 = document.createElement("p");
textEl1.textContent =
	"Bacon ipsum dolor amet chuck pastrami rump, ham hock meatloaf tongue ball tip pig. Frankfurter salami kielbasa prosciutto drumstick jerky jowl alcatra. Beef ribs alcatra tail fatback cupim, rump burgdoggen strip steak ham. Pork chop flank brisket shoulder bacon cow chislic swine buffalo jowl tri-tip short ribs hamburger doner spare ribs. Chislic salami flank fatback. Tri-tip capicola tenderloin pork chop shank beef ribs pancetta pastrami jerky.";

aboutEl.appendChild(titleEl1);
aboutEl.appendChild(textEl1);

mainDiv.appendChild(aboutEl);

export default mainDiv;
