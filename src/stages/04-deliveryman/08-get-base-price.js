const { findClient, nextStage } = require("../../app/utils");

function execute(user, message) {
    foundClient = findClient(user);
    nextStage(foundClient);

    if (!message.includes("seguir")) {
        foundClient.didHeWorkBefore = message.trim();
    }

    return [
        "Considerando o raio de distância que me informou, " +
        "quanto você costuma ganhar por entrega que realiza?"
    ];

}

exports.execute = execute;