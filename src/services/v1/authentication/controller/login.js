const ErrorResponse = require("../../../../utilities/error/error.response");
const { Users } = require("../../../../database");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
	const { email, password } = req.body;

	if (!email || !password)
		return next(new ErrorResponse("Please provide email and password", 400));

	try {
		const data = await Users.findAll({
			where: {
				email,
			},
		});

		if (!data.length) return next(new ErrorResponse("No user found", 404));

		const user = data[0];

		if (!(await bcrypt.compare(password, user.password)))
			return next(new ErrorResponse("Incorrect Password", 401));

		res.status(200).json({
			success: true,
			token: jwt.sign({ id: user.id, admin: false }, process.env.JWT_SECRET, {
				expiresIn: process.env.JWT_EXPIRE,
			}),
			message: `Welcome ${user.firstName} ${user.lastName}!!`,
		});
	} catch (error) {
		// Send Error Response
		next(error);
	}
};
