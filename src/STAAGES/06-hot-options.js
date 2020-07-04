// const database = require('../database');

function execute(user, message) {
	if (message === "indicação") {
		// database.db[user].stage = 7;
        return [
            "Perfeito! As pessoas costumam dizer que eu tenho bom gosto mesmo 😅 " +
            "Esses são os pratos que eu vejo que todo mundo gosta no seu bairro:",
            "Prato 1\n" +
            "descrição\n\n" +
            "Prato 2\n" +
            "descrição\n\n" +
            "Prato 3\n" +
            "descrição\n\n" +
            "Prato 4\n" +
            "descrição\n\n" +
            "Prato 5\n" +
            "descrição\n\n"
        ]
    }
}

exports.execute = execute;
