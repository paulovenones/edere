// const database = require("../database");
const { foundClient } = require("../app/index");
const { nextStage } = require("../app/utils");
const fs = require("fs");
const data = require("../data.json");

function execute(user, message) {
	if (message === "1") {
		console.log("found client =" + foundClient);
		nextStage(foundClient);
		return [
			"Que ótimo! Acabei de comer por aqui e posso te indicar uns restaurantes bem legais. Me diga sua cidade e seu nome.",
		];
	}

	// const reply = message.split(",");

	// database.db.user.city = reply[0];
	// database.db.user.name = reply[1];
	// database.db.user.stage = 2;
}

exports.execute = execute;
