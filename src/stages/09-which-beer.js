const { findClient, nextStage } = require('../app/utils')

function execute(user, message) {
    foundClient = findClient(user);

    if (message === "2") {
        nextStage(foundClient);

        return [
            "Bem geladinha, né? É o que todo mundo quer. Esse restaurante vende\n\n" +
            "1 - Skol\n" +
            "2 - Brahma\n" +
            "3 - Kaiser\n\n" +
            "Qual você vai escolher hoje?"
        ];
    }
}

exports.execute = execute;