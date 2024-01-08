const mainEl = document.createElement("div");

const titleEl = document.createElement("h2");
titleEl.textContent = "Contact Us";
mainEl.appendChild(titleEl);

const contacts = {
	Phone: "555-123-4567",
	Fax: "555-666-7777",
	Email: "email@email.email",
	TTY: "000-111-9999",
};

for (const prop in contacts) {
	const contactEl = document.createElement("p");
	contactEl.textContent = `${prop}: ${contacts[prop]}`;
	mainEl.appendChild(contactEl);
}

const paragraphEl = document.createElement("p");
paragraphEl.textContent =
	"Webtwo ipsum insala unigo blekko wesabe, jibjab. Eduvant whrrl plugg blyve vimeo udemy heroku omgpop, elgg appjet cotweet squidoo yoono heroku. Kazaa lijit meebo jajah airbnb woopra, napster koofers jumo. Zinch zooomr lala shopify yoono bebo, joost oooj reddit. Gooru plugg revver balihoo lanyrd zanga, mog unigo flickr blyve, elgg udemy empressr rovio. Hojoki omgpop tivo geni flickr cloudera, blippy gsnap zoho. Mozy woopra jabber zoodles, skype ifttt. Eskobo cuil airbnb jaiku rovio, squidoo wakoopa rovio. Jajah shopify waze jumo koofers wufoo, bitly kosmix convore loopt. Odeo bitly jabber gooru, waze. Jabber bitly blippy zillow ideeli bubbli, loopt bubbli quora.";

mainEl.appendChild(paragraphEl);

const mapEl = document.createElement("img");
mapEl.setAttribute("src", "../src/img/map.png");
mapEl.classList.add("map");
mainEl.appendChild(mapEl);

export default mainEl;
