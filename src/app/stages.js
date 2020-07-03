let stages = {
	1: {
		descricao: "segundo",
		obj: require("../stages/01-hungry-person.js"),
	},
	2: {
		descricao: "terceiro",
		obj: require("../stages/02-tell-me-your-city.js"),
	},
	3: {
		descricao: "quarto",
		obj: require("../stages/03-tell-me-the-neighborhood.js"),
	},
	4: {
		descricao: "quinto",
		obj: require("../stages/04-choose-category.js"),
	},
	5: {
		descricao: "sexto",
		obj: require("../stages/05-restaurants.js"),
	},
	6: {
		descricao: "sétimo",
		obj: require("../stages/06-choose-restaurant.js"),
	},
	7: {
		descricao: "oitavo",
		obj: require("../stages/07-wanna-see-the-menu.js"),
	},
	8: {
		descricao: "nono",
		obj: require("../stages/05-restaurants.js"),
	},
	9: {
		descricao: "décimo",
		obj: require("../stages/05-restaurants.js"),
	},
	10: {
		descricao: "décimo primeiro",
		obj: require("../stages/05-restaurants.js"),
	},
};

exports.step = stages;
