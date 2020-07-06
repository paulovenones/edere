const { findClient, nextStage } = require("../../app/utils");

function execute(user, message) {
	foundClient = findClient(user);
	let products = message.trim().split(",");
	foundClient.prodItems = products;

	nextStage(foundClient);

	return [
		"Já estou pensando em pedir um pacote dos seus produtos para mim, confesso. Agora me conta qual o produto que mais vende?",
	];
}
exports.execute = execute;
