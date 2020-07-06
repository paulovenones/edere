const { findClient, nextStage } = require("../../app/utils");

function execute(user, message) {
    foundClient = findClient(user);
    //get vechile doc picture

    nextStage(foundClient);

    return [
        "Ótimo. Agora eu preciso que você me diga qual o raio máximo de distância " +
        "para o atendimento do transporte? (_até 10km_, por exemplo)"
    ];

}

exports.execute = execute;