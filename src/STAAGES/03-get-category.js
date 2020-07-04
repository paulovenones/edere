// const database = require('../database');

function execute(user, message) {
	if (message === "Cristo Rei") {
		// database.db[user].stage = 4;
		return [
			"Olha só, encontrei 25 restaurantes abertos na sua região! Do que você sente mais vontade de comer?\n",
			"1- Massas\n" +
				"2- Comida Brasileira\n" +
				"3- Pizza\n" +
				"4- Acaí\n" +
				"5- Hambúrguer\n" +
				"6- Comida Japonesa\n" +
				"7- Mexicana\n" +
				"8- Comida Árabe\n" +
				"9- Comida Asiática\n",
			"10- Café\n",
			"11- Carnes\n",
			"12- Doces\n",
			"13- Fast food\n",
			"14- Comida Francesa\n",
			"15- Frutos do mar\n",
			"16- Grelhados\n",
			"17- Mineira\n",
			"18- Italiana\n",
			"19- Lanches\n",
			"20- Padaria\n",
			"21- Poke\n",
			"22- Sanduíche\n",
			"23- Saudável\n",
			"24- Sushi\n",
			"25- Vegetariana\n",
		];
	}
}

exports.execute = execute;
