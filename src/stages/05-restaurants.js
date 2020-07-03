// const database = require("../database");

function execute(user, message) {
	if (message === "restaurantes") {
		database.db[user].stage = 6;
		return [
			"Ah, achei que você ia querer conferir mesmo. Esses são os nomes dos " +
				"restaurantes já com o @ pra você procurar nas suas redes 😉\n\n" +
				"1 - @fulano\n" +
				"2 - @ciclano\n" +
				"3 - @beltrano\n" +
				"4 - @cislano\n" +
				"5 - @geltranoo\n" +
				"6 - @edevardo\n",
			"E agora, Nome!? Prefere ver o cardápio de algum ou quer que eu " +
				"te indique os 5 pratos japoneses que estão saindo mais na sua região?",
		];
	}
}

exports.execute = execute;
