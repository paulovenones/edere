const { findClient, nextStage } = require("../../app/utils");

function execute(user, message) {
    foundClient = findClient(user);
    foundClient.distanceDelivery = message.trim();
    nextStage(foundClient);

    return [
        "Se você já trabalhou com aplicativos de entrega, conta como foi experiência com eles, " +
        "mas se você não usou antes ou prefere não dizer, é só escrever *seguir* que passaremos para próxima."
    ];

}

exports.execute = execute;