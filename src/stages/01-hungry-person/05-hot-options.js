const { findClient, nextStage } = require("../../app/utils");
const cardapio = require("../../app/hot-options-menu");

let numberOption = 0;

function execute(user, message) {
	foundClient = findClient(user);

	if (message.includes("7")) {
		let responseMessage = "";

		Object.keys(cardapio.menu).forEach((element) => {
			numberOption++;

			let stringPrice = "";

			stringPrice += cardapio.menu[element].price[0];
			stringPrice += cardapio.menu[element].price[1];
			stringPrice += ",";
			stringPrice += cardapio.menu[element].price[3];
			stringPrice += cardapio.menu[element].price[4];

			let name = cardapio.menu[element].name;
			let description = cardapio.menu[element].description;

			responseMessage += `${numberOption} - *${name}*\n${description}\nR$ ${stringPrice}\n\n`;
		});

		return [
			"Perfeito! As pessoas costumam dizer que eu tenho bom gosto mesmo 😅 " +
			"Esses são os pratos que eu vejo que todo mundo gosta no seu bairro:",
			responseMessage,
		];
	} else if (message.includes("#")) {
		foundClient.stage = 0;
		return [
			`Tudo bem então${
			`, ` + foundClient.name
			}! Vou atender outros clientes agora, ` +
			"mas é só você mandar um *oi* que eu volto 🎶 😜",
		];
	} else if (message.includes("*")) {
		nextStage(foundClient);

		let resumoPedido = "";

		Object.keys(foundClient.items).forEach((element) => {
			let name = foundClient.items[element].name;
			let price = "";
			price += foundClient.items[element].price[0];
			price += foundClient.items[element].price[1];
			price += ",";
			price += foundClient.items[element].price[3];
			price += foundClient.items[element].price[4];

			resumoPedido += `*${name}* --- R$ ${price}\n`;
		});

		foundClient.orderSummary = resumoPedido;

		return [
			"Certo, tudo salvo!",
			//mostrar items e valor total
			"Aqui está um resumo de seu pedido:\n\n" + `${resumoPedido}`,
			//pedir confirmação
			"Digite * mais uma vez para confirmar",
		];
	} else if (message.includes(`${parseInt(message.trim()) <= numberOption ? message.trim() : false}`)) {

		console.log(foundClient.items.push(cardapio.menu[message.trim()]))

		return [
			`Certo! O item ${cardapio.menu[message.trim()].name} já tá separado pra você.`,
			"Se quiser adicionar mais algum item é só digitar o número. " +
			"Caso queria finalizar, pode digitar *, tá?",
			"Ah, e você pode cancelar tudo digitando *#*.",
		];
	} else {
		return [
			"Ops! Acho que por enquanto a gente não vai conseguir " +
			"te mostrar isso :(\n" +
			"A gente ainda pode te indicar os pratos se você quiser. " +
			"É só digitar *7*",
			"Caso prefira, você pode cancelar tudo digitando *#*",
		];
	}
}

exports.execute = execute;
