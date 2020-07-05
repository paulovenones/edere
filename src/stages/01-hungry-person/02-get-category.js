const { findClient, nextStage } = require("../../app/utils");

function execute(user, message) {
	foundClient = findClient(user);
	foundClient.neighborhood = message.trim();
	nextStage(foundClient);
	return [
		"Olha só, encontrei 25 restaurantes abertos na sua região! Do que você sente mais vontade de comer?",
		"1 - Massas\n" +
		"2 - Sushi\n" +
		"3 - Pizza\n" +
		"4 - Acaí\n" +
		"5 - Saudável\n" +
		"6 - Hambúrguer\n" +
		"7 - Comida Japonesa\n" +
		"8 - Comida Mexicana\n" +
		"9 - Comida Brasileira\n" +
		"10 - Comida Árabe\n" +
		"11 - Comida Asiática\n" +
		"12 - Comida Francesa\n" +
		"13 - Comida Italiana\n" +
		"14 - Comida Mineira\n" +
		"15 - Café\n" +
		"16 - Carnes\n" +
		"17 - Doces\n" +
		"18 - Fast food\n" +
		"19 - Frutos do mar\n" +
		"20 - Grelhados\n" +
		"21 - Lanches\n" +
		"22 - Padaria\n" +
		"23 - Poke\n" +
		"24 - Sanduíche\n" +
		"25 - Vegetariana"
	];
}

exports.execute = execute;
