const { findClient, nextStage } = require("../../app/utils");

function execute(user, message) {
    foundClient = findClient(user);
    let lessSoldArray = message.trim().split(", ");
    foundClient.lessSold.push(lessSoldArray);

    nextStage(foundClient);

    return [
        "Todos sabemos que você ganha o cliente pelo visual, que ao ver " +
        "a foto sente aquela vontade de comer. Então se você tiver, " +
        "manda fotos autorais do seu cardápio?"
    ];

}

exports.execute = execute;