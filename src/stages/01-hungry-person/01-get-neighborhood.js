const { findClient, nextStage } = require("../../app/utils");

function execute(user, message) {
	foundClient = findClient(user);

	if (message.includes(",")) {
		const messageWithoutSpaces = message.trim();
		const replyArray = messageWithoutSpaces.split(",");
		foundClient.name = replyArray[0].trim();
		foundClient.city = replyArray[1].trim();

		nextStage(foundClient);

		return [
			`Legal! Eu visito ${foundClient.city} direto, é uma cidade muito bonita. Em que bairro você está agora?`,
		];
	} else {
		return [
			"Eita, eu tô um pouco confusa... Olha, você precisa separar o seu nome e a cidade por vírgula. " +
			"Dá uma olhada nesse exemplo aqui:",
			"(Exemplo: *João*, *Recife*)"
		];

	}

}

exports.execute = execute;

/*
o que acontece se eu passar apenas o nome?
*/
