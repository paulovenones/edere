const { findClient, nextStage } = require('../app/utils');

function execute(user, message) {
    foundClient = findClient(user);
    if (message === "sim") {
        nextStage(foundClient);

        return [
            "Esse restaurante serve\n\n" +
            "1 - refrigerantes\n" +
            "2 - cervejas\n" +
            "3 - saques\n\n" +
            "Qual você vai pedir?"
        ];
    }
}

exports.execute = execute;