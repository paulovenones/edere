const { findClient, nextStage } = require("../../app/utils");

function execute(user, message) {
    foundClient = findClient(user);
    //save the pictures SOMEHOW

    nextStage(foundClient);

    return [
        "Perfeito, tenho certeza que nossos consumidores vão querer comer ao olhar. " +
        "Agora quais são os 3 melhores pratos para nos indicar do seu estabelecimento?"
    ];

}

exports.execute = execute;