const { findClient, nextStage } = require("../../app/utils");

function execute(user, message) {
    foundClient = findClient(user);    
    foundClient.deliverymanId = message.trim();
    nextStage(foundClient);

    return [
        "Agora preciso da foto da sua CNH"
    ];

}

exports.execute = execute;