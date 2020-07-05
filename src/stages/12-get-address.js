const { findClient, nextStage } = require("../app/utils");

function execute(user, message) {
    foundClient = findClient(user);
    if (message === "3") {
        nextStage(foundClient);

        return [
            "Ótimo. Pode me mandar seu endereço pra eu já passar o seu pedido? " +
            "Acho que você já deve estar com fome com tanto zap zap 😜 " +
            "Se quiser mais alguma coisa, é só dizer *ainda tô com fome* " +
            "que a gente continua esse papo"
        ];
    }
}

exports.execute = execute;