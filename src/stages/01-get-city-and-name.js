const { findClient, nextStage } = require("../app/utils");

function execute(user, message) {
	foundClient = findClient(user);

	if (message.includes("0")) {
		foundClient.stage = 0;
		return [
			`Tudo bem então${`, ` + foundClient.name}! Vou atender outros clientes agora, ` +
			"mas é só você mandar um *oi* que eu volto 🎶 😜"
		];
	}

	if (message.includes("1")) {
		foundClient.stage = 1;
		return [
			"Que ótimo! Acabei de comer por aqui e posso te indicar uns restaurantes" +
			"bem legais. Me diga seu nome e, em seguida, sua cidade, separados por vírgula.",
			"(Exemplo: *Maria*, *São Paulo*)"
		];

	} else if (message.includes("2")) {
		foundClient.stage = 15;

		return [
			"Que bacana, fico muito feliz que você ficou interessado em se inscrever em meu banco " +
			"de dados e fazer parte dessa conexão tão importante!",
			"Vamos começar, me conta seu nome"
		];

	} else if (message.includes("3")) {
		return [
			"Ops! Ainda estamos trabalhando nessas opções. Por enquanto, apenas a opção 1 " +
			"está disponível, mas em breve a ajeita tudo, tá?",
			"Então, quer fazer algum pedido?\n\n" +
			"1 - Sim, tô com fome!\n" +
			"0 - Não. Outra hora a gente se fala, Édere"
		];

	} else if (message.includes("4")) {
		foundClient.stage = 34;
		return [
			"Você com certeza é um dos elos mais importantes nessa conexão que estamos criando. " +
			"Fico muito feliz por você ter ficado interessado em se inscrever em meu banco de dados! " +
			"Então vamos começar com dados básicos, ok?",
			"Primeiro, me conta seu nome"
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
