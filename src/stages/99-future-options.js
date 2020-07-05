// let menu = " \n CARDÁPIO \n\n";

// Object.keys(cardapio.menu).forEach(value => {
//     let element = cardapio.menu[value];

//     menu += `Posição: ${value} - ` + `Descrição: ${element.descricao} - ` + `R$ ${element.preco}\n`;
// });

// let total = 0;
// banco.db[user].itens.forEach(value => {
//     total += value.preco;
// });

// return [
//     `Total R$ ${total}`,
//     "Caso queria finalizar, pode digitar *confirmar*, tá?",
//     "Ah, e você pode cancelar tudo digitando *cancelar*."
// ]

// if (message === "cancelar") {
//     database.db[user].stage = 0;
//     return [
//         "Okay, já joguei tudo fora.",
//         "Caso queira começar de novo, só falar comigo."
//     ];
// }

// database.db[user].items.push(cardapio.menu[message]);

// return [
//     `Certo! O item ${cardapio.menu[message].descricao} já tá separado pra você.`,
//     "Se quiser adicionar mais algum item é só digitar o número. " +
//     "Caso queria finalizar, pode digitar *terminei*, tá?",
//     "Ah, e você pode cancelar tudo digitando *cancelar*."
// ];

// if (message === "cancelar") {
//     banco.db[user].stage = 2;
//     return [
//         "Eu ainda nem tinha anotado! haha",
//         "Então, qual era mesmo o endereço?"
//     ];
// }