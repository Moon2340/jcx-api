const { Admin } = require("../../../../database");
const ErrorResponse = require("../../../../utilities/error/error.response");

module.exports = async (req, res, next) => {
	// Get Values
	const { username, firstName, lastName } = req.body;
	try {
		const user = await Admin.findByPk(req.user.id);

		if (!user) return next(new ErrorResponse("No user found!", 404));

		await user.update({
			username,
			firstName,
			lastName,
		});
		res.status(201).json({
			success: true,
			message: "Informations updated sucessfully",
		});
		// On Error
	} catch (error) {
		// Send Error Response
		next(error);
	}
};
