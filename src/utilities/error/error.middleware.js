const ErrorResponse = require("./error.response");

module.exports = (err, _req, res, _next) => {
	let error = { ...err };
	error.message = err.message;
	if (err.name?.includes("Sequelize")) {
		var message = err.errors[0].message;
		error = new ErrorResponse(
			message.replace("must be unique", "already exists"),
			400
		);
	}
	return res.status(error.statusCode || 500).json({
		success: false,
		message: error.message || "Internal Server Error",
	});
};
