const { findClient, nextStage } = require('../../app/utils');

function execute(user, message) {
    foundClient = findClient(user);

    if (message.includes("1")) {
        nextStage(foundClient);

        return [
            "Esse restaurante serve\n\n" +
            "1 - refrigerantes\n" +
            "2 - cervejas\n" +
            "3 - saques\n\n" +
            "Qual você vai pedir?"
        ];
    } else if (message.includes("2")) {
        foundClient.stage = 11;
        return [
            "Certo. Você quer mais alguma coisa? Esse restaurante " +
            "tem todas essas outras opções no cardápio:\n\n" +
            "1 - Entradas\n" +
            "2 - Acompanhamentos\n" +
            "3 - Sobremesas\n\n" +
            "4 - Não, já estou satisfeito."
        ];

    } else if (message.includes("#")) {
        foundClient.stage = 0;
        return [
            `Tudo bem então${`, ` + foundClient.name}! Vou atender outros clientes agora, ` +
            "mas é só você mandar um *oi* que eu volto 🎶 😜"
        ];
    } else {
        return [
            "Mmmm... não temos essa opção por aqui. Poderia digitar novamente? " +
            "Ó, você só precisa digitar um número, desse jeito, por exemplo: ",
            "2",
            "Certo? Então, vamos tentar mais uma vez! Pode digitar sua opção ;)",
            "Ah, e você pode cancelar tudo digitando *#*"
        ];
    }
}

exports.execute = execute;