const { findClient, nextStage } = require("../app/utils");

function execute(user, message) {
    foundClient = findClient(user);
    if (message === "3") {
        nextStage(foundClient);
        
        return [
            "Ah, no seu lugar eu também ia querer. Tem essas aqui, ó:\n\n" +            
            "• Pudim\n" +
            "• Bolo no pote\n" +
            "• Petit Gateau de doce de leite"
        ];
    }
}

exports.execute = execute;