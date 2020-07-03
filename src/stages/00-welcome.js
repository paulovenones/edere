const data = require("../data.json");

let index = 0;
function findClient(number) {
	foundUser = data.clients.find(function (client, foundIndex) {
		if (number == client.number) {
			index = foundIndex;
			return true;
		}
	});
	return foundUser;
}

function execute(number, message) {
	client = findClient(number);
	client.stage = 1;
	data.clients[index].push(client);
	fs.writeFile("src/data.json", JSON.stringify(data, null, 2), function (err) {
		if (err) return;
	});

	return [
		"Oi, aqui é a Édere!",
		"Pra que eu possa te atender melhor, me conta se você é:\n\n" +
			"1 - Uma pessoa com fome\n" +
			"2 - Empreendedor de um restaurante\n" +
			"3 - Produtor local de alimentos\n" +
			"4 - Entregador",
	];
}

exports.execute = execute;
