const { findClient, nextStage } = require("../../app/utils");

function execute(user, message) {
    foundClient = findClient(user);
    let mostSoldArray = message.trim().split(", ");
    foundClient.mostSold.push(mostSoldArray);

    nextStage(foundClient);

    return [
        "E o que você menos vende?"
    ];

}

exports.execute = execute;