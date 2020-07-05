const { findClient, nextStage } = require("../app/utils");

function execute(user, message) {
    foundClient = findClient(user);
    foundClient.stage = 0;
    
    foundClient.addressLine2 = message.trim();
    const resumoPedido = foundClient.orderSummary;

    return [
        `Ótimo, ${foundClient.name}! O endereço de entrega ficou assim: ${foundClient.address} - ` +
        `${foundClient.neighborhood}, ${foundClient.city}.\n\n` +
        "Aqui tá o resumo do pedido também:\n\n" +
        `${resumoPedido}`,
        "Já passei o seu pedido para o restaurante e alguém já entra em " +
        "contato com você pra falar a previsão do seu pedido, tá bom? " +
        "Vou continuar minha vida porque meu zap tá bombando hoje 😎 " +
        "Mas não se preocupa! Vou esperar 1h depois que o seu entregador " +
        "sair do seu endereço e volto aqui pra perguntar como foi a sua experiência, " +
        "tá bom? Não me deixa no vácuo ein, e aproveita o seu pedido 😚"
    ];

}

exports.execute = execute;