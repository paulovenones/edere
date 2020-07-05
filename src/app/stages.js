let stages = {
	1: {
		descricao: "segundo",
		obj: require("../stages/01-get-city-and-name.js"),
	},
	2: {
		descricao: "terceiro",
		obj: require("../stages/02-get-neighborhood.js"),
	},
	3: {
		descricao: "quarto",
		obj: require("../stages/03-get-category.js"),
	},
	4: {
		descricao: "quinto",
		obj: require("../stages/04-restaurants-or-menu.js"),
	},
	5: {
		descricao: "sexto",
		obj: require("../stages/05-any-restaurant-or-hot-options.js"),
	},
	6: {
		descricao: "sétimo",
		obj: require("../stages/06-hot-options.js"),
	},
	7: {
		descricao: "oitavo",
		obj: require("../stages/07-drink.js"),
	},
	8: {
		descricao: "oitavo",
		obj: require("../stages/08-which-kind-of-drink.js"),
	},
	9: {
		descricao: "oitavo",
		obj: require("../stages/09-which-beer.js"),
	},
	10: {
		descricao: "oitavo",
		obj: require("../stages/10-get-menu-category.js"),
	},
	11: {
		descricao: "oitavo",
		obj: require("../stages/11-get-category-options.js"),
	},
	12: {
		descricao: "oitavo",
		obj: require("../stages/12-get-address.js"),
	},
	13: {
		descricao: "oitavo",
		obj: require("../stages/13-more-info-about-address.js"),
	},
	14: {
		descricao: "oitavo",
		obj: require("../stages/14-end.js"),
	},
};

exports.step = stages;
