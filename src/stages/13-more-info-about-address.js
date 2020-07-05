const { findClient, nextStage } = require("../app/utils");

function execute(user, message) {
    foundClient = findClient(user);
    nextStage(foundClient);

    return [
        "Que região gostosa, ein! Se quiser me contar um complemento ou um ponto " +
        "de referência, seria legal pra ajudar o motoboy a te achar 🥰"
    ];

}

exports.execute = execute;