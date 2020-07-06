const { findClient, nextStage } = require("../../app/utils");

function execute(user, message) {
    foundClient = findClient(user);
    let addressLineArray = message.trim().split(",");
    foundClient.addressLine1 = addressLineArray[0].trim();
    foundClient.addressLine2 = addressLineArray[1].trim();
    foundClient.neighborhood = addressLineArray[2].trim();
    foundClient.city = addressLineArray[3].trim();

    nextStage(foundClient);

    return [
        "Anotado.",
        "Nesse passo você vamos focar nas informações do seu estabelecimento. " +
        "Conte, ele é um(a)... (exemplo: restaurante ou padaria)"
    ];

}

exports.execute = execute;