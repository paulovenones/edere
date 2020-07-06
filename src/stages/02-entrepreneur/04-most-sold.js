const { findClient, nextStage } = require("../../app/utils");

function execute(user, message) {
    foundClient = findClient(user);
    foundClient.storeCategory = message.trim();

    nextStage(foundClient);

    return [
        "Ótimo. E o que você mais vende?"
    ];

}

exports.execute = execute;