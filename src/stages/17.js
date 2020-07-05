if (message === "cancelar") {
    banco.db[user].stage = 2;
    return [
        "Eu ainda nem tinha anotado! haha",
        "Então, qual era mesmo o endereço?"
    ];
}

if (message === "confirmar") {
    banco.db[user].stage = 4;
    return [
        "Ótimo, Nome! Já passei o seu pedido para o restaurante e alguém já entra em contato com você pra falar " +
        "a previsão do seu pedido, tá bom? Vou continuar minha vida porque meu zap tá bombando hoje 😎 Mas não se " +
        "preocupa! Vou esperar 1h depois que o seu entregador sair do seu endereço e volto aqui pra perguntar como " +
        "foi a sua experiência, tá bom? Não me deixa no vácuo ein, e aproveita o seu pedido 😚"
    ];
}

return [
    "Você pode confirmar o endereço? Afinal, a gente não quer que o motoboy deixe seu pedido esfriando ;P",
    "Caso queria finalizar, pode digitar *confirmar*, tá?",
    "Ah, e você pode cancelar tudo digitando *cancelar*."
];