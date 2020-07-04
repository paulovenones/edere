// const database = require('../database');
const { findClient, nextStage } = require("../app/utils");

function execute(user, message) {
	foundClient = findClient(user);
	if (message.toUpperCase().includes("INDIC")) {
		nextStage(foundClient);
		return [
			"Perfeito! As pessoas costumam dizer que eu tenho bom gosto mesmo 😅 " +
				"Esses são os pratos que eu vejo que todo mundo gosta no seu bairro:",
			"Prato 1\n" +
				"descrição\n\n" +
				"Prato 2\n" +
				"descrição\n\n" +
				"Prato 3\n" +
				"descrição\n\n" +
				"Prato 4\n" +
				"descrição\n\n" +
				"Prato 5\n" +
				"descrição\n\n",
		];
	}
}

exports.execute = execute;
