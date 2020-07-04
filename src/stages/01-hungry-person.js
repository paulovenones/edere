// const database = require("../database");
const { findClient, nextStage } = require("../app/utils");

let foundClient;

function execute(user, message) {
	if (message === "1") {
		foundClient = findClient(user);
		nextStage(foundClient);
		console.log(message);
		return [
			"Que ótimo! Acabei de comer por aqui e posso te indicar uns restaurantes bem legais. Me diga seu nome e, em seguida, sua cidade separados por vírgula. (Exemplo: Paulo, São Paulo)",
		];
	}

	// database.db.user.city = reply[0];
	// database.db.user.name = reply[1];
	// database.db.user.stage = 2;
}

exports.execute = execute;
