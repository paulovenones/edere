let stages = {
	1: {
		descricao: "door",
		obj: require("../stages/01-get-city-and-name.js"),
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
		descricao: "fiveth-hungry-person",
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
		descricao: "first-entrepreneur",
		obj: require("../stages/02-entrepreneur/02-get-address.js"),
	},
	17: {
		descricao: "first-entrepreneur",
		obj: require("../stages/02-entrepreneur/03-store-category.js"),
	},
	18: {
		descricao: "first-entrepreneur",
		obj: require("../stages/02-entrepreneur/04-most-sold.js"),
	},
	19: {
		descricao: "first-entrepreneur",
		obj: require("../stages/02-entrepreneur/05-less-sold.js"),
	},
	20: {
		descricao: "first-entrepreneur",
		obj: require("../stages/02-entrepreneur/06-get-photos.js"),
	},
	21: {
		descricao: "first-entrepreneur",
		obj: require("../stages/02-entrepreneur/07-hot-options-from-menu.js"),
	},
	22: {
		descricao: "first-entrepreneur",
		obj: require("../stages/02-entrepreneur/08-get-social-network.js"),
	},
	23: {
		descricao: "first-entrepreneur",
		obj: require("../stages/02-entrepreneur/09-get-more-details.js"),
	},
	24: {
		descricao: "first-entrepreneur",
		obj: require("../stages/02-entrepreneur/10-get-info-about-deliveryman.js"),
	},
	25: {
		descricao: "first-entrepreneur",
		obj: require("../stages/02-entrepreneur/11-end.js"),
	},
	26: {
		descricao: "first-entrepreneur",
		obj: require("../stages/03-local-producer/02-get-store-name.js"),
	},
	27: {
		descricao: "first-entrepreneur",
		obj: require("../stages/03-local-producer/03-get-address.js"),
	},
	28: {
		descricao: "first-entrepreneur",
		obj: require("../stages/03-local-producer/04-get-store-name copy 2.js"),
	},
	29: {
		descricao: "first-entrepreneur",
		obj: require("../stages/03-local-producer/05-get-store-name copy 3.js"),
	},
	30: {
		descricao: "first-entrepreneur",
		obj: require("../stages/03-local-producer/06-get-store-name copy 4.js"),
	},
	31: {
		descricao: "first-entrepreneur",
		obj: require("../stages/03-local-producer/07-get-store-name copy 5.js"),
	},
	32: {
		descricao: "first-entrepreneur",
		obj: require("../stages/03-local-producer/08-get-store-name copy 6.js"),
	},
	33: {
		descricao: "first-entrepreneur",
		obj: require("../stages/03-local-producer/09-get-store-name copy 7.js"),
	},
	34: {
		descricao: "first-entrepreneur",
		obj: require("../stages/04-deliveryman/01-get-address.js"),
	},
	35: {
		descricao: "first-entrepreneur",
		obj: require("../stages/04-deliveryman/02-get-id.js"),
	},
	36: {
		descricao: "first-entrepreneur",
		obj: require("../stages/04-deliveryman/03-get-doc-picture.js"),
	},
	37: {
		descricao: "first-entrepreneur",
		obj: require("../stages/04-deliveryman/04-get-vehicle-info.js"),
	},
	38: {
		descricao: "first-entrepreneur",
		obj: require("../stages/04-deliveryman/05-get-vehicle-doc-picture.js"),
	},
	39: {
		descricao: "first-entrepreneur",
		obj: require("../stages/04-deliveryman/06-get-delivery-area.js"),
	},
	40: {
		descricao: "first-entrepreneur",
		obj: require("../stages/04-deliveryman/07-did-he-worked-before.js"),
	},
	41: {
		descricao: "first-entrepreneur",
		obj: require("../stages/04-deliveryman/08-get-base-price.js"),
	},
	42: {
		descricao: "first-entrepreneur",
		obj: require("../stages/04-deliveryman/09-do-he-agree-base-price.js"),
	},
	43: {
		descricao: "first-entrepreneur",
		obj: require("../stages/04-deliveryman/10-end.js"),
	}

};

exports.step = stages;