const { findClient, nextStage } = require("../../app/utils");

function execute(user, message) {
    foundClient = findClient(user);
    nextStage(foundClient);

    return [
        "Ótimo. Pode me mandar seu endereço pra eu já passar o seu pedido? " +
        "O bairro a gente já tem! Só precisamos da rua/avenida e número. " +
        "Acho que você já deve estar com fome com tanto zap zap 😜 " +
        "Se quiser mais alguma coisa, é só dizer *ainda tô com fome* " +
        "que a gente continua esse papo"
    ];
}

exports.execute = execute;