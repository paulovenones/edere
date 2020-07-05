const { findClient, nextStage } = require("../../app/utils");

function execute(user, message) {
    foundClient = findClient(user);
    nextStage(foundClient);

    return [
        "Ótimo. Você quer mais alguma coisa? Esse restaurante " +
        "tem todas essas outras opções no cardápio:\n\n" +
        "1 - Entradas\n" +
        "2 - Acompanhamentos\n" +
        "3 - Sobremesas",
        "Caso não queira mais nada é só digitar *0* que a gente continua"
    ];

}

exports.execute = execute;