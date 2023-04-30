const ErrorResponse = require("../../../../utilities/error/error.response");

module.exports = async (req, res, next) => {
	try {
		if (!req.user) return next(new ErrorResponse("No user found!", 404));

		res.status(200).json({
			success: true,
			message: "User is authenticated.",
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
