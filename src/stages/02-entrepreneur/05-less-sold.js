const { findClient, nextStage } = require("../../app/utils");

function execute(user, message) {
    foundClient = findClient(user);    
    foundClient.mostSold = message.trim(); 

    nextStage(foundClient);

    return [
        "E o que você menos vende?"
    ];

}

exports.execute = execute;