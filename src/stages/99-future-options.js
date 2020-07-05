let total = 0;
banco.db[user].itens.forEach(value => {
    total += value.preco;
});

return [
    `Total R$ ${total}`,
    "Caso queria finalizar, pode digitar *confirmar*, tá?",
    "Ah, e você pode cancelar tudo digitando *cancelar*."
]

if (message === "cancelar") {
    database.db[user].stage = 0;
    return [
        "Okay, já joguei tudo fora.",
        "Caso queira começar de novo, só falar comigo."
    ];
}


if (message === "cancelar") {    
    return [
        "Eu ainda nem tinha anotado! haha",
        "Então, qual era mesmo o endereço?"
    ];
}