const { findClient, nextStage } = require("../app/utils");

function execute(user, message) {
	foundClient = findClient(user);
	nextStage(foundClient);
	return [
		"Nossa, já tô com água na boca só de olhar! " +
		"Você vai querer bebida junto?\n\n" +
		"1 - Sim\n" +
		"2 - Não"
	];
}

exports.execute = execute;
