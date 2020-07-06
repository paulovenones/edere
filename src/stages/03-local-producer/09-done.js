const { findClient, nextStage } = require("../../app/utils");

function execute(user, message) {
	foundClient = findClient(user);
	foundClient.prodDelivery = message;
	nextStage(foundClient);

	return [
		"Seu cadastro foi concluído com sucesso e não vejo a hora dos restaurantes e consumidores me pedir indicações de produtos locais para passar seus produtos. Vou continuar minha vida porque meu zap tá bombando hoje e qualquer coisa que você precisar, só me mandar *“ajuda Édere”* que venho correndo para te auxiliar no que for necessário.",
	];
}

exports.execute = execute;
