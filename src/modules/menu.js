const mainEl = document.createElement("div");

const titleEl = document.createElement("h1");
titleEl.textContent = "Menu";
mainEl.appendChild(titleEl);

const foods = [
	{
		name: "Pancakes",
		img: "../src/img/pancakes.jpg",
		price: 8.99,
		description:
			"Tender keelhaul grog blossom draught starboard Jack Tar skysail Spanish Main boom bucko hornswaggle nipper rum plunder broadside bilge rat Jolly Roger parrel strike colors jolly boat driver crimp ho jury mast lateen sail pressgang scurvy me yawl lookout maroon swab ahoy Privateer splice the main brace cog jack reef avast heave to topgallant swing the lead quarter Pieces of Eight snow six pounders hulk case shot topsail transom.",
	},
	{
		name: "Cheeseburger",
		img: "../src/img/burger.jpg",
		price: 12.99,
		description:
			"Bacon venison hamburger pastrami pork. Cow salami turducken spare ribs chislic hamburger filet mignon chuck jowl ham. Porchetta ham hock pork frankfurter sausage fatback jerky beef ribs. Meatloaf chislic beef pastrami chuck hamburger. Filet mignon pastrami ham t-bone tail, kielbasa jowl landjaeger beef meatloaf pancetta tri-tip. Turkey tail pork venison, ball tip swine landjaeger kevin.",
	},
	{
		name: "Zucchini with Rice",
		img: "../src/img/rice.jpg",
		price: 10.75,
		description:
			"I love cheese, especially feta cheesy feet. Chalk and cheese mozzarella fondue cheesy grin smelly cheese ricotta cheeseburger goat. Bavarian bergkase pecorino cheesy grin cheese slices gouda lancashire boursin cauliflower cheese. Say cheese cheeseburger pecorino mozzarella parmesan goat ricotta port-salut. Cheeseburger queso pepper jack caerphilly danish fontina mascarpone cheese and biscuits cheese on toast. Bocconcini manchego boursin chalk and cheese cow mascarpone bocconcini.",
	},
	{
		name: "Seafood Ramen",
		img: "../src/img/seafood.jpg",
		price: 11.25,
		description:
			"Prickly shark great white shark river stingray thornyhead wobbegong, European chub noodlefish whale shark sheepshead Modoc sucker Atlantic eel, lined sole. Marine hatchetfish, beaked salmon lyretail snubnose parasitic eel triggerfish, sea bream: shiner coley ribbonbearer. Oldwife mouthbrooder bat ray lemon sole grunion redtooth triggerfish walleye pollock gulf menhaden. European minnow yellowhead jawfish snake eel Pacific cod mummichog fierasfer. Barbeled houndshark gulf menhaden smooth dogfish. Airbreathing catfish silver carp giant sea bass Shingle Fish mud catfish, Hammerjaw zebra shark murray cod. Freshwater herring, sand dab Norwegian Atlantic salmon saber-toothed blenny common tunny pencil catfish kappy Antarctic cod. Lemon shark spiny dwarf catfish muskellunge sheatfish peladillo lake trout midshipman, Black scalyfin drum.",
	},
];

foods.forEach((food) => {
	const foodEl = document.createElement("div");
	foodEl.classList.add("menu-item");

	const leftEl = document.createElement("div");

	const foodNameEl = document.createElement("h2");
	foodNameEl.textContent = `${food.name} - ${food.price}`;
	leftEl.appendChild(foodNameEl);

	const foodImgEl = document.createElement("img");
	foodImgEl.setAttribute("src", food.img);
	foodImgEl.setAttribute("alt", `Image of ${food.name}`);
	leftEl.appendChild(foodImgEl);

	foodEl.appendChild(leftEl);

	const foodDescriptionEl = document.createElement("p");
	foodDescriptionEl.textContent = food.description;
	foodEl.appendChild(foodDescriptionEl);

	mainEl.appendChild(foodEl);
});

export default mainEl;
