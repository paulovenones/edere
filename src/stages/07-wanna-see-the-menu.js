// const database = require("../database");
const { findClient, nextStage } = require("../app/utils");

function execute(user, message) {
	foundClient = findClient(user);
	foundClient.stage = 0;
	return [
		"Nossa, acho que isso é olho gordo, porque era bem esse que eu ia escolher! " +
			"Você vai querer bebida junto?",
		"🚧🚧CUIDADO!!! Estou em obra daqui para frente!!!🚧🚧",
	];
}

exports.execute = execute;
