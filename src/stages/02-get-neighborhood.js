const { findClient, nextStage } = require("../app/utils");

function execute(user, message) {
	foundClient = findClient(user);
	const reply = message.split(", ");
	foundClient.name = reply[0];
	foundClient.city = reply[1];
	nextStage(foundClient);
	return [
		`Legal! Eu visito ${foundClient.city} direto, é uma cidade muito bonita. Em que bairro você está agora?`,
	];
}

exports.execute = execute;

/*
o que acontece se eu passar apenas o nome?
*/
