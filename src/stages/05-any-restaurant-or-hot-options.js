const { findClient, nextStage } = require("../../app/utils");

function execute(user, message) {
	foundClient = findClient(user);

	if (message.includes("1")) {
		foundClient = findClient(user);
		nextStage(foundClient);
		return [
			"Ah, achei que você ia querer conferir mesmo. Esses são os nomes dos " +
				"restaurantes já com o @ pra você procurar nas suas redes 😉\n\n" +
				"1 - @fulano\n" +
				"2 - @ciclano\n" +
				"3 - @beltrano\n" +
				"4 - @cislano\n" +
				"5 - @geltrano\n" +
				"6 - @edevardo",
			`E agora, ${foundClient.name}!? Prefere ver o cardápio de um deles ou quer que eu ` +
				"te indique os 5 pratos dessa categoria que estão saindo mais na sua região?\n\n" +
				"7 - Me indica aí!",
		];
	} else if (message.includes("#")) {
		foundClient.stage = 0;
		return [
			`Tudo bem então${
				`, ` + foundClient.name
			}! Vou atender outros clientes agora, ` +
				"mas é só você mandar um *oi* que eu volto 🎶 😜",
		];
	} else {
		return [
			"Ops! Ainda estamos trabalhando nessas opções. Por enquanto, apenas a opção 1 " +
				"está disponível, mas em breve a ajeita tudo, tá?",
			"Então, quer ver os restaurantes?\n\n" +
				"1 - Sim, ainda tô com fome!\n" +
				"# - Não. Outra hora a gente se fala, Édere",
		];
	}
}

exports.execute = execute;
