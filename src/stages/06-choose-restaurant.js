// const database = require('../database');

function execute(user, message) {
	if (message === "1") {
		database.db[user].stage = 7;
		return [];
	}
}

exports.execute = execute;
