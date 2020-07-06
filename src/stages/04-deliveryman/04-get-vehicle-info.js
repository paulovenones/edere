const { findClient, nextStage } = require("../../app/utils");

function execute(user, message) {
    foundClient = findClient(user);    
    //save doc picture
    
    nextStage(foundClient);

    return [
        "Muito obrigada. E fica tranquilo que ela está bem guardada em meu banco de dados, ok?",
        "Agora me fala, você faz entregas com... (exemplo: _moto_)"
    ];

}

exports.execute = execute;