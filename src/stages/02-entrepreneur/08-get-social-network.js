const { findClient, nextStage } = require("../../app/utils");

function execute(user, message) {
    foundClient = findClient(user);
    let hotOptionsArray = message.trim().split(", ");
    foundClient.hotOptions.push(hotOptionsArray);    

    nextStage(foundClient);

    return [
        "Por favor, me envie a sua rede social para que eu " +
        "deixe cadastrado caso o consumidor pedir para acessar."
    ];

}

exports.execute = execute;