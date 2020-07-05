const { findClient, nextStage } = require("../../app/utils");

function execute(user, message) {
    foundClient = findClient(user);
    foundClient.stage = 15;

    foundClient.deliverymanInfo = message.trim();

    //show all the info gathered so far

    return [
        "Cadastro concluído com sucesso!",
        "Estou muito contente de você fazer parte dessa conexão. " +
        "Vou continuar minha vida porque meu zap tá bombando hoje e " +
        "qualquer coisa que você precisar, é só me mandar *ajuda édere* " +
        "que venho correndo para te auxiliar no que for necessário.",
        "Boas vendas! 😚"
    ];

}

exports.execute = execute;