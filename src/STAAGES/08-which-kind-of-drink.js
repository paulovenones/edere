// const database = require('../database');

function execute(user, message) {
    // database.db[user].stage = 9;
    if (message === "sim") {
        "Esse restaurante serve\n\n" +
        "1 - refrigerantes\n" +
        "2 - cervejas\n" +
        "3 - saques\n\n" +
        "Qual você vai pedir?"
    }
}

exports.execute = execute;