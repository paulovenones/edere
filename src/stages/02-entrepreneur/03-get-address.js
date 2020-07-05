const { findClient, nextStage } = require("../../app/utils");

function execute(user, message) {
    foundClient = findClient(user);
    let addressLineArray = message.trim().split(",");

    nextStage(foundClient);

    return [
        "Anotado. Nesse passo você vamos focar nas informações do seu estabelecimento" +
        "Conte, ele é um… (exemplo: restaurante)"+

        "Rua Nome da Rua, 123 - Nome do Bairro, Cidade"

    ];

}

exports.execute = execute;