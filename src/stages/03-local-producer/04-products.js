const { findClient, nextStage } = require("../../app/utils");

function execute(user, message) {
	foundClient = findClient(user);
	foundClient.prodAddress = message;
	nextStage(foundClient);

	return [
		`Anotado. Me conta mais sobre sua produção, quais são os tipos de produtos que você trabalha? Se for mais que um, por favor, separar por vírgula. (exemplo: verduras, frutas, sucos, óleos, ovos)`,
	];
}

exports.execute = execute;
