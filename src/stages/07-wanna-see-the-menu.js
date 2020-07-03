// const database = require("../database");

function execute(user, message) {
	if (message === "1") {
		database.db[user].stage = 8;
		return [
			`E agora, ${database.db[user].name}!? Prefere ver o cardápio de algum, ou quer que eu` +
				"te indique os 5 pratos japoneses que estão saindo mais na sua região?",
		];
	}
}

exports.execute = execute;
