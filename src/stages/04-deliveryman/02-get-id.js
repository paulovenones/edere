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
        "Agora preciso que você me envie o número do seu RG"
    ];

}

exports.execute = execute;