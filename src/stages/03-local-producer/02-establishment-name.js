const { findClient, nextStage } = require("../../app/utils");

function execute(user, message) {
	foundClient = findClient(user);
	foundClient.name = message.trim();

	let nameArray = foundClient.name.split(" ");

	nextStage(foundClient);

	return [
		`Ok, ${nameArray[0]}, é um prazer te conhecer. Preciso de alguns dados para cadastrarmos os seus produtos, fica tranquilo que não vai demorar muito.`,
		"Qual o nome do estabelecimento onde você produz?",
	];
}

exports.execute = execute;
