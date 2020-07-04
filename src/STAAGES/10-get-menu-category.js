// const database = require('../database');

function execute(user, message) {
    // database.db[user].stage = 11;
    if (message === "3") {
        "Ótimo. Você quer mais alguma coisa? Esse restaurante " +
            "tem todas essas outras opções no cardápio:" +
            "• Entradas\n" +
            "• Acompanhamentos\n" +
            "• Sobremesas\n"
    }
}

exports.execute = execute;