const venom = require("venom-bot");
const fs = require("fs");
const data = require("../data");
const stages = require("./stages");
const { findClient, nextStage } = require("./utils");
let index = 0;
let user;

function getStage(user) {
	return user.stage;
}

venom.create().then((client) => start(client));
function start(client) {
	client.onMessage((message) => {
		let foundClient = findClient(message.from);
		userStage = getStage(foundClient);
		if (userStage == 0) {

			client.sendText(message.from, "Oi, aqui é a Édere!");
			client.sendText(
				message.from,
				"Pra que eu possa te atender melhor, me conta se você é:\n\n" +
				"1 - Uma pessoa com fome\n" +
				"2 - Empreendedor de um restaurante\n" +
				"3 - Produtor local de alimentos\n" +
				"4 - Entregador"
			);

			nextStage(foundClient);
			fs.writeFile("src/data.json", JSON.stringify(data, null, 2), function (
				err
			) {
				if (err) return;
				return;
			});

		}
		let responseFile = stages.step[userStage];
		let responseArray = responseFile.obj.execute(message.from, message.body);
		fs.writeFile("src/data.json", JSON.stringify(data, null, 2), function (
			err
		) {
			if (err) return;
			return;
		});

		for (let index = 0; index < responseArray.length; index++) {
			const response = responseArray[index];
			client.sendText(message.from, response);
		}
	});
}
