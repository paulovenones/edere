// let option = require("../helper/option");
const data = require("../data.json");

// exports.execute = execute;
// console.log(this)

function execute(user, message) {
	data.user.stage = 3;
	fs.writeFile("../data.json", JSON.stringify(data, null, 2), function (err) {
		if (err) return;
		return user;
	});

	return [
		`Legal! Eu visito ${database.db[user].city} direto, é uma cidade muito bonita. Em que bairro você está agora?`,
	];
}

exports.execute = execute;
