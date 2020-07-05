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
            `${nameArray[0]}, é um prazer te receber aqui. E você mora aonde?`,
            "Por favor, passa o endereço completo, desse jeito: _Rua Nome da Rua, 123, Bairro, Cidade_"
        ];
    }







}

exports.execute = execute;