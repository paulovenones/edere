const { findClient, nextStage } = require("../../app/utils");

function execute(user, message) {
    foundClient = findClient(user);

    foundClient.socialNetwork = message.trim();

    nextStage(foundClient);

    return [
        "Preciso confirmar mais alguns detalhes para completar o seu cadastro.",
        "Qual o raio de distância para atendimento do seu produto sem perda de " +
        "qualidade durante a viagem? _(até 10km, por exemplo)_"
    ];

}

exports.execute = execute;