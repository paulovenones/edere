const { findClient, nextStage } = require("../../app/utils");

function execute(user, message) {
    foundClient = findClient(user);
    foundClient.deliverymanVehicle = message.trim();
    nextStage(foundClient);

    return [
        "Perfeito. Nunca esqueça de usar as proteções necessárias para transporte. ",
        "Agora preciso também da foto do documento. Pode me passar?"
    ];

}

exports.execute = execute;