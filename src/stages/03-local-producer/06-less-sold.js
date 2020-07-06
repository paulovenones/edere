const { findClient, nextStage } = require("../../app/utils");

function execute(user, message) {
	foundClient = findClient(user);
	foundClient.prodMostSold = message;
	nextStage(foundClient);

	return ["E aquele que sai menos?"];
}

exports.execute = execute;
