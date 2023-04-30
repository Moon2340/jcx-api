const { Users } = require("../../../../database");
// const ErrorResponse = require("../../../../utilities/error/error.response");

module.exports = async (req, res, next) => {
	try {
		await Users.create(
			{ ...req.body },
			{
				fields: ["username", "firstName", "lastName", "email", "password"],
			}
		);

		res.status(201).json({
			success: true,
			message: "Account created successfully!",
		});
	} catch (error) {
		// Send Error Response
		next(error);
	}
};
