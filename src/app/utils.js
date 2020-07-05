const data = require("../data");
const { addClient } = require("./utils");

exports.welcome = function () {
	client.sendText(message.from, "Oi, aqui é a Édere!");
	client.sendText(
		message.from,
		"Pra que eu possa te atender melhor, me conta se você é:\n\n" +
		"1 - Uma pessoa com fome\n" +
		"2 - Empreendedor de um restaurante\n" +
		"3 - Produtor local de alimentos\n" +
		"4 - Entregador"
	);
};

exports.addClient = function (number) {
	let id = 1;
	const lastClient = data.clients[data.clients.length - 1];

	if (lastClient) {
		id = lastClient.id + 1;
	}
	data.clients.push({
		id,
		stage: 0,
		items: [],
		name: "",
		city: "",
		addressLine1: "",
		addressLine2: "",
		number: `${number}`,
		orderSummary: "",
		storeName: ""
	});
	fs.writeFile("src/data.json", JSON.stringify(data, null, 2), function (err) {
		if (err) return;
		return true;
	});
};

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
			name: "",
			city: "",
			addressLine1: "",
			addressLine2: "",
			neighborhood: "",
			items: [],
			number: `${number}`,
			orderSummary: ""
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
