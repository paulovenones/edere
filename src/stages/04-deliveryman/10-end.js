const { findClient, nextStage } = require("../../app/utils");

function execute(user, message) {
    foundClient = findClient(user);
    foundClient.stage = 34;

    //show all the info gathered so far

    if (!message.includes("não")) {

        return [
            "Maravilha, seu cadastro foi concluído com sucesso. Na primeira oportunidade " +
            "que um estabelecimento precisar de entregador, pode ter certeza que você estará " +
            "no topo da minha lista!",
            "Vou continuar minha vida porque meu zap tá bombando hoje " +
            "e qualquer coisa que você precisar, só me mandar “ajuda édere” que venho correndo " +
            "para te auxiliar no que for necessário."
        ];
    } else {

        foundClient.acceptedPrice = false;
        return [
            "Maravilha, seu cadastro foi concluído com sucesso. Na primeira oportunidade " +
            "que um estabelecimento precisar de entregador, pode ter certeza que você estará " +
            "no topo da minha lista!",
            "Vou continuar minha vida porque meu zap tá bombando hoje " +
            "e qualquer coisa que você precisar, só me mandar “ajuda édere” que venho correndo " +
            "para te auxiliar no que for necessário."
        ];
    }
}

exports.execute = execute;