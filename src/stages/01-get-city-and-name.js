const { findClient, nextStage } = require("../app/utils");

function execute(user, message) {
	foundClient = findClient(user);

	if (message === "1") {		
		nextStage(foundClient);		
		return [
			"Que ótimo! Acabei de comer por aqui e posso te indicar uns restaurantes" +
			"bem legais. Me diga seu nome e, em seguida, sua cidade, separados por vírgula.",
			"(Exemplo: *Maria*, *São Paulo*)"
		];
	} else if (message === "0") {
		foundClient.stage = 0;
		return [
			`Tudo bem então${`, ` + foundClient.name}! Vou atender outros clientes agora, ` +
			"mas é só você mandar um *oi* que eu volto 🎶 😜"
		];
	} else {
		return [
			"Ops! Ainda estamos trabalhando nessas opções. Por enquanto, apenas a opção 1 " +
			"está disponível, mas em breve a ajeita tudo, tá?",
			"Então, quer fazer algum pedido?\n\n" +
			"1 - Sim, tô com fome!\n" +
			"0 - Não. Outra hora a gente se fala, Édere"
		];

	}
}

exports.execute = execute;
