const express = require("express");
const app = express();
const cors = require("cors");

// database sync
const db = require("./database");
db.Connection.sync()
	.then(() => {
		console.log("Synced database.");
	})
	.catch((err) => {
		console.log("Failed to sync database: " + err.message);
	});

// REST API
app.use(express.json());

// CORS Permission
app.use(
	cors({
		origin: "*",
		methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
		preflightContinue: false,
		optionsSuccessStatus: 204,
	})
);

module.exports = app;
