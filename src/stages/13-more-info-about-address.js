const { findClient, nextStage } = require("../app/utils");

function execute(user, message) {
    foundClient = findClient(user);

    if (message.length >= 7) {
        nextStage(foundClient);

        foundClient.address = message.trim();

        return [
            "Que região gostosa, ein! Se quiser me contar um complemento ou um ponto " +
            "de referência, seria legal pra ajudar o entregador a te achar 🥰"
        ];
    } else {
        return [
            "Mmmm... eu não tô conseguindo entender esse endereço. Você pode digitar de novo " +
            "adicionando mais informações? Ó, vou te dar um exemplo:",
            "Rua Mário de Andrade, 25"
        ];

    }



}

exports.execute = execute;
