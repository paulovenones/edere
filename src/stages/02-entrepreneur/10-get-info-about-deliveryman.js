const { findClient, nextStage } = require("../../app/utils");

function execute(user, message) {
    foundClient = findClient(user);

    foundClient.distanceDelivery = message.trim();

    nextStage(foundClient);

    return [
        "Maravilha. Agora me diga, seu estabelecimento já tem entregador? " +
        "Se não, aceita que eu te indique o entregador quando houver os pedidos?"
    ];

}

exports.execute = execute;