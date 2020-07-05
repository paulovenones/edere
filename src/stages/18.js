// let menu = " \n CARDÁPIO \n\n";

// Object.keys(cardapio.menu).forEach(value => {
//     let element = cardapio.menu[value];

//     menu += `Posição: ${value} - ` + `Descrição: ${element.descricao} - ` + `R$ ${element.preco}\n`;
// });

// if (message === "cancelar") {
//     banco.db[user].stage = 1;
//     return [
//         "Okay, já joguei tudo fora.",
//         "Quando estiver pronto, digita *continuar*, beleza?"
//     ];
// }

// if (message === "confirmar") {
//     banco.db[user].stage = 3;
//     return [
//         "Ótimo!",
//         "Agora, digita o seu endereço pra gente já ir se preparando."
//     ];
// }


// let total = 0;
// banco.db[user].itens.forEach(value => {
//     total += value.preco;
// });

// return [
//     `Total R$ ${total}`,
//     "Caso queria finalizar, pode digitar *confirmar*, tá?",
//     "Ah, e você pode cancelar tudo digitando *cancelar*."
// ]

// --



// if (message === "cancelar") {
//     database.db[user].stage = 0;
//     return [
//         "Okay, já joguei tudo fora.",
//         "Caso queira começar de novo, só falar comigo."
//     ];
// }

// if (message === "terminei") {
//     database.db[user].stage = 2;
//     return [
//         "Pronto, tudo anotado aqui!",
//         "Só digita *confirmar* pra gente continuar, pode ser? Isso é só um bug, mas já já a gente conserta! :D"
//     ];
// }

// if (!cardapio.menu[message]) {
//     return [
//         "Mmmm... não temos essa opção por aqui. Poderia digitar novamente? " +
//         "Ó, você só precisa digitar o número desse jeito, por exemplo: ",
//         "2",
//         "Certo? Então, vamos tentar mais uma vez! Pode digitar sua opção ;)"
//     ];
// }

// database.db[user].items.push(cardapio.menu[message]);

// return [
//     `Certo! O item ${cardapio.menu[message].descricao} já tá separado pra você.`,
//     "Se quiser adicionar mais algum item é só digitar o número. " +
//     "Caso queria finalizar, pode digitar *terminei*, tá?",
//     "Ah, e você pode cancelar tudo digitando *cancelar*."
// ];