const { findClient, nextStage } = require("../../app/utils");

function execute(user, message) {
    foundClient = findClient(user);

    if (message.includes("")) {
        nextStage(foundClient);

        return [

        ];

    }

}

exports.execute = execute;