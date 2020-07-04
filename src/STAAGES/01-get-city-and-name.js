const fs = require("fs");
const data = require("../data.json");

function execute(user, message) {

	if (message === "1") {
		data.user.stage = 2;
		fs.writeFile("../data.json", JSON.stringify(data, null, 2), function (err) {
			if (err) return;
			return user;
		});
		return [
			"Que ótimo! Acabei de comer por aqui e posso te indicar uns restaurantes bem legais. Me diga sua cidade e seu nome.",
		];
	}

	// const reply = message.split(",");

	// database.db.user.city = reply[0];
	// database.db.user.name = reply[1];
	// database.db.user.stage = 2;

	// const userData = {
	// 	...database.db[user],
	// 	city: reply[0],
	// 	name: reply[1],
	// 	stage: 2,
	// };
}

exports.execute = execute;
