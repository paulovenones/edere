const { findClient, nextStage } = require("../../app/utils");

function execute(user, message) {
    foundClient = findClient(user);
    foundClient.name = message.trim();

    let nameArray = foundClient.name.split(" ");

    if (message.includes("ajud")) {

        return [
            "Opa, vim correndo! Olha, uma pessoa super legal já tá vindo pra bater um papo com você, tá bem?"
        ]

    } else {
        nextStage(foundClient);

        return [
            `${nameArray[0]}, é um prazer te receber aqui. Preciso de alguns dados ` +
            "para cadastrarmos o seu restaurante, fica tranquilo que será rapidinho.",
            "Agora me diz o nome do estabelecimento"
        ];
    }







}

exports.execute = execute;