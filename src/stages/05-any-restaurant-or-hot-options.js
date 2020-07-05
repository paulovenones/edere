const { findClient, nextStage } = require("../app/utils");

function execute(user, message) {	
	if (message.toUpperCase().includes("REST")) {
		foundClient = findClient(user);
		nextStage(foundClient);
		return [
			"Ah, achei que você ia querer conferir mesmo. Esses são os nomes dos " +
			"restaurantes já com o @ pra você procurar nas suas redes 😉\n\n" +
			"1 - @fulano\n" +
			"2 - @ciclano\n" +
			"3 - @beltrano\n" +
			"4 - @cislano\n" +
			"5 - @geltrano\n" +
			"6 - @edevardo",
			`E agora, ${foundClient.name}!? Prefere ver o cardápio de um deles ou quer que eu ` +
			"te indique os 5 pratos dessa categoria que estão saindo mais na sua região?"
		];
	}
	
}

exports.execute = execute;
