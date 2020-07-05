const { findClient, nextStage } = require("../app/utils");

function execute(user, message) {
	if (message === "1") {
		foundClient = findClient(user);
		nextStage(foundClient);
		console.log(message);
		return [
			"Que ótimo! Acabei de comer por aqui e posso te indicar uns restaurantes" +
			"bem legais. Me diga seu nome e, em seguida, sua cidade separados por vírgula.",
			"(Exemplo: *Maria*, *São Paulo*)"
		];
	}
}

exports.execute = execute;
