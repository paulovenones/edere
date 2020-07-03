// let option = require("../helper/option");
const data = require("../data.json");

// exports.execute = execute;
// console.log(this)

function execute(user, message) {
	database.db[user].stage = 3;
	return [
		`Legal! Eu visito ${database.db[user].city} direto, é uma cidade muito bonita. Em que bairro você está agora?`,
	];
}

exports.execute = execute;
