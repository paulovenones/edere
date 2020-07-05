const { findClient, nextStage } = require("../app/utils");

function execute(user, message) {
    foundClient = findClient(user);

    if (message.includes("0")) {
        foundClient.stage = 13;

        return [
            "Ótimo. Pode me mandar seu endereço pra eu já passar o seu pedido? " +
            "Acho que você já deve estar com fome com tanto zap zap 😜 " +
            "Se quiser mais alguma coisa, é só dizer *ainda tô com fome* " +
            "que a gente continua esse papo"
        ];

    } else if (message.includes("1") || message.includes("2") || message.includes("3")) {
        nextStage(foundClient);

        return [
            "Ah, no seu lugar eu também ia querer. Tem essas aqui, ó:\n\n" +
            "1 - Pudim\n" +
            "2 - Bolo no pote\n" +
            "3 - Petit Gateau de doce de leite"
        ];
    } else if (message.includes("4")) {
        foundClient.stage = 13;
        return [
            "Ótimo. Pode me mandar seu endereço pra eu já passar o seu pedido? " +
            "Acho que você já deve estar com fome com tanto zap zap 😜 " +
            "Se quiser mais alguma coisa, é só dizer *ainda tô com fome* " +
            "que a gente continua esse papo"
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