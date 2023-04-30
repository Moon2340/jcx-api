const ErrorResponse = require("../../../../utilities/error/error.response");

module.exports = async (req, res, next) => {
	try {
		if (!req.user) return next(new ErrorResponse("No admin found!", 404));

		res.status(200).json({
			success: true,
			message: `${req.user.username} is authenticated as admin`,
			data: {
				id: req.user.id,
				firstName: req.user.firstName,
				lastName: req.user.lastName,
				username: req.user.username,
				createdAt: req.user.createdAt,
			},
		});
	} catch (error) {
		// Send Error Response
		next(error);
	}
};
