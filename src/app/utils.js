const data = require("../data");

exports.findClient = function (number) {
	let user = data.clients.find(function (client, foundIndex) {
		if (number == client.number) {
			index = foundIndex;
			return true;
		}
	});

	// if it's a new client
	if (!user) {
		let id = 1;
		const lastClient = data.clients[data.clients.length - 1];

		if (lastClient) {
			id = lastClient.id + 1;
		}
		data.clients.push({
			id,
			stage: 0,
			number: `${number}`,
		});
		user = data.clients.find(function (client) {
			if (number == client.number) {
				return true;
			}
		});
	}
	return user;
};

exports.nextStage = function (user) {
	user.stage = user.stage + 1;
};
