const { findClient, nextStage } = require('../../app/utils')

function execute(user, message) {
    foundClient = findClient(user);

    if (message.includes("2")) {
        nextStage(foundClient);

        return [
            "Bem geladinha, né? É o que todo mundo quer. Esse restaurante vende\n\n" +
            "1 - Skol\n" +
            "2 - Brahma\n" +
            "3 - Kaiser\n\n" +
            "Qual você vai escolher hoje?"
        ];
    } else if (message.includes("1") || message.includes("3")) {
        return [
            "Eita! Parece que esse produto tá em falta. " +
            "Você pode escolher outra opção? " +
            "Se quiser, é só digitar o número da opção desejada",
            "Caso você não queira nenhuma delas, é só digitar *0* que a gente continua",
            "Você pode ainda cancelar tudo digitando *#*"
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