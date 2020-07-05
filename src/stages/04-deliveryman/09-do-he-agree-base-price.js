const { findClient, nextStage } = require("../../app/utils");

function execute(user, message) {
    foundClient = findClient(user);
    foundClient.deliveryBasePrice = message.trim();
    nextStage(foundClient);

    return [
        "Anotado. Para você ficar ciente, quando eu indico um entregador para " +
        "o estabelecimento, nós passamos o valor fixo de *R$ 15*. Se concordar " +
        "com esse valor, me manda *concordo* para finalizarmos seu cadastro. " +
        "Entretanto, se não estiver contente com o valor fixo, me mande *não concordo*."
    ];

}

exports.execute = execute;