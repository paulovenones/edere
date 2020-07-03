// const database = require('../database');

function execute(user, message) {
	if (message === "Cristo Rei") {
		database.db[user].stage = 4;
		return [
			"Olha só, encontrei 25 restaurantes abertos na sua região! Do que você sente mais vontade de comer?",
			"1- Massas\n" +
				"2- Comida Brasileira\n" +
				"3- Pizza\n" +
				"4- Hambúrguer\n" +
				"5- Comida Japonesa\n" +
				"6- Mexicana\n" +
				"7- Arabe\n" +
				"8- Mineira\n",
		];
	}
}

exports.execute = execute;
