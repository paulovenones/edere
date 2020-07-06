const { findClient, nextStage } = require("../../app/utils");

function execute(user, message) {
	foundClient = findClient(user);
	foundClient.prodLessSold = message;
	nextStage(foundClient);

	return [
		"Por favor, me envie a sua rede social para que eu deixe cadastrado caso o consumidor pedir para acessar.",
	];
}

exports.execute = execute;
