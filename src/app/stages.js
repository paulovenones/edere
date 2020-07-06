let stages = {
	1: {
		descricao: "door",
		obj: require("../stages/01-get-city-and-name"),
	},
	2: {
		descricao: "first-hungry-person",
		obj: require("../stages/01-hungry-person/01-get-neighborhood.js"),
	},
	3: {
		descricao: "second-hungry-person",
		obj: require("../stages/01-hungry-person/02-get-category.js"),
	},
	4: {
		descricao: "third-hungry-person",
		obj: require("../stages/01-hungry-person/03-restaurants-or-menu.js"),
	},
	5: {
		descricao: "fourth-hungry-person",
		obj: require("../stages/01-hungry-person/04-any-restaurant-or-hot-options.js"),
	},
	6: {
		descricao: "fifth-hungry-person",
		obj: require("../stages/01-hungry-person/05-hot-options.js"),
	},
	7: {
		descricao: "sixth-hungry-person",
		obj: require("../stages/01-hungry-person/06-drink.js"),
	},
	8: {
		descricao: "seventh-hungry-person",
		obj: require("../stages/01-hungry-person/07-which-kind-of-drink.js"),
	},
	9: {
		descricao: "eighth-hungry-person",
		obj: require("../stages/01-hungry-person/08-which-beer.js"),
	},
	10: {
		descricao: "nineth-hungry-person",
		obj: require("../stages/01-hungry-person/09-get-menu-category.js"),
	},
	11: {
		descricao: "tenth-hungry-person",
		obj: require("../stages/01-hungry-person/10-get-category-options.js"),
	},
	12: {
		descricao: "eleventh-hungry-person",
		obj: require("../stages/01-hungry-person/11-get-address.js"),
	},
	13: {
		descricao: "twelfth-hungry-person",
		obj: require("../stages/01-hungry-person/12-more-info-about-address.js"),
	},
	14: {
		descricao: "thirteenth-hungry-person",
		obj: require("../stages/01-hungry-person/13-end.js"),
	},
	15: {
		descricao: "first-entrepreneur",
		obj: require("../stages/02-entrepreneur/01-get-store-name.js"),
	},
	16: {
		descricao: "second-entrepreneur",
		obj: require("../stages/02-entrepreneur/02-get-address.js"),
	},
	17: {
		descricao: "third-entrepreneur",
		obj: require("../stages/02-entrepreneur/03-store-category.js"),
	},
	18: {
		descricao: "fourth-entrepreneur",
		obj: require("../stages/02-entrepreneur/04-most-sold.js"),
	},
	19: {
		descricao: "fifth-entrepreneur",
		obj: require("../stages/02-entrepreneur/05-less-sold.js"),
	},
	20: {
		descricao: "sixth-entrepreneur",
		obj: require("../stages/02-entrepreneur/06-get-photos.js"),
	},
	21: {
		descricao: "first-entrepreneur",
		obj: require("../stages/02-entrepreneur/07-hot-options-from-menu.js"),
	},
	22: {
		descricao: "seventh-entrepreneur",
		obj: require("../stages/02-entrepreneur/08-get-social-network.js"),
	},
	23: {
		descricao: "eighth-entrepreneur",
		obj: require("../stages/02-entrepreneur/09-get-more-details.js"),
	},
	24: {
		descricao: "ninth-entrepreneur",
		obj: require("../stages/02-entrepreneur/10-get-info-about-deliveryman.js"),
	},
	25: {
		descricao: "tenth-entrepreneur",
		obj: require("../stages/02-entrepreneur/11-end.js"),
	},
	30: {
		descricao: "first-local-producer",
		obj: require("../stages/03-local-producer/02-establishment-name.js"),
	},
	31: {
		descricao: "second-local-producer",
		obj: require("../stages/03-local-producer/03-get-address.js"),
	},
	32: {
		descricao: "third-local-producer",
		obj: require("../stages/03-local-producer/04-products.js"),
	},
	33: {
		descricao: "fourth-local-producer",
		obj: require("../stages/03-local-producer/05-most-sold.js"),
	},
	34: {
		descricao: "fifth-local-producer",
		obj: require("../stages/03-local-producer/06-less-sold.js"),
	},
	35: {
		descricao: "sixth-local-producer",
		obj: require("../stages/03-local-producer/07-social-media.js"),
	},
	36: {
		descricao: "seventh-local-producer",
		obj: require("../stages/03-local-producer/08-delivery.js"),
	},
	37: {
		descricao: "eighth-local-producer",
		obj: require("../stages/03-local-producer/09-done.js"),
	},
};

exports.step = stages;
