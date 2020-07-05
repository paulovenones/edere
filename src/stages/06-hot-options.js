const { findClient, nextStage } = require("../app/utils");

function execute(user, message) {
	foundClient = findClient(user);
	if (message.includes("7")) {
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
	} else if (message.includes("#")) {
		foundClient.stage = 0;
		return [
			`Tudo bem então${`, ` + foundClient.name}! Vou atender outros clientes agora, ` +
			"mas é só você mandar um *oi* que eu volto 🎶 😜"
		];
	} else {
		return [
			"Ops! Acho que por enquanto a gente não vai conseguir " +
			"te mostrar isso :(\n" +
			"A gente ainda pode te indicar os pratos se você quiser. " +
			"É só digitar *7*",
			"Caso prefira, você pode cancelar tudo digitando *#*"
		];
	}
}

exports.execute = execute;
