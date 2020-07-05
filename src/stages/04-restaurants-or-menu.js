const { findClient, nextStage } = require("../app/utils");

function execute(user, message) {
	foundClient = findClient(user);
	nextStage(foundClient);
	return [
		"Legal, encontrei 7 restaurantes dessa categoria. " +
		"Você quer saber quais são eles ou prefere ver algumas opções de cardápio?",
	];
}

exports.execute = execute;