// const database = require('../database');

function execute(user, message) {
    // database.db[user].stage = 13;
    if (message === "3") {
        "Ótimo. Pode me mandar seu endereço pra eu já passar o seu pedido? " +
            "Acho que você deve estar com fome já, de tanto zap zap 😜 " +
            "Se quiser mais alguma coisa, é só dizer <strong>ainda tô com fome</strong> " +
            "que a gente continua esse papo"
    }
}

exports.execute = execute;