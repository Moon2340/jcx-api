const { Users } = require("../../../../database");
const ErrorResponse = require("../../../../utilities/error/error.response");

module.exports = async (req, res, next) => {
	// Get Values
	try {
		if (!req.params.id) return next(new ErrorResponse("Invalid Request!", 400));

		const user = await Users.findByPk(req.params.id, {
			attributes: {
				exclude: ["password"],
			},
		});

		if (!user) return next(new ErrorResponse("No user found!", 404));

		res.status(200).json({
			success: true,
			message: "Informations fetched sucessfully",
			data: user,
		});
		// On Error
	} catch (error) {
		// Send Error Response
		next(error);
	}
};
