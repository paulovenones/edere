// const database = require('../database');

function execute(user, message) {
	if (message === "5") {
		// database.db[user].stage = 5;
		return [
			"Legal, encontrei 7 restaurantes dessa categoria, " +
				"você quer saber quais são eles ou prefere ver algumas opções de cardápio?",
		];
	}
}

exports.execute = execute;
