const { findClient, nextStage } = require("../app/utils");

function execute(user, message) {
	foundClient = findClient(user);
	nextStage(foundClient);
	return [
		"Nossa, acho que isso é olho gordo, porque era bem esse que eu ia escolher! " +
		"Você vai querer bebida junto?\n\n" +
		"1 - Sim\n" +
		"2 - Não"
	];
}

exports.execute = execute;
