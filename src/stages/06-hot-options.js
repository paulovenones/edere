const { findClient, nextStage } = require("../app/utils");

function execute(user, message) {
	foundClient = findClient(user);
	if (message.toUpperCase().includes("INDI")) {
		nextStage(foundClient);
		return [
			"Perfeito! As pessoas costumam dizer que eu tenho bom gosto mesmo 😅 " +
			"Esses são os pratos que eu vejo que todo mundo gosta no seu bairro:",
			"1 - *Pizza Calabresa*\n" +
			"Ingredientes: descrição\n" +
			"_R$ 22,00_\n\n" +
			"2 - *Pizza Mussarela*\n" +
			"Ingredientes: descrição\n" +
			"_R$ 20,00_\n\n" +
			"3 - *Pizza Napolitana*\n" +
			"Ingredientes: descrição\n" +
			"_R$ 26,00_\n\n" +
			"4 - *Pizza Quatro Queijos*\n" +
			"Ingredientes: descrição\n" +
			"_R$ 25,00_\n\n" +
			"5 - *Pizza Chocolate*\n" +
			"Ingredientes: descrição\n" +
			"_R$ 26,00_"
		];
	}
}

exports.execute = execute;
