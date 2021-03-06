const { findClient, nextStage } = require("../../app/utils");

function execute(user, message) {
	foundClient = findClient(user);
	foundClient.prodName = message;

	nextStage(foundClient);

	return [
		"Maravilha. Preciso agora do endereço completo do seu estabelecimento, " +
			"com a rua, número, bairro e cidade. Olha, é só digitar como nesse exemplo:",
		"Rua Nome da Rua, 123 - Nome do Bairro, Cidade",
	];
}

exports.execute = execute;
