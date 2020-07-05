const { findClient, nextStage } = require("../app/utils");

function execute(user, message) {
	foundClient = findClient(user);
	nextStage(foundClient);
	return [
		"Legal, encontrei 6 restaurantes dessa categoria. " +
		"Você quer saber quais são eles ou prefere ver algumas opções de cardápio?\n\n" +
		"1 - Restaurantes\n" +
		"2 - Cardápio"
	];	
}

exports.execute = execute;