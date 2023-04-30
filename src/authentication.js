const jwt = require("jsonwebtoken");
const { Users, Admin } = require("./database");
const ErrorResponse = require("./utilities/error/error.response");

exports.protect = async (req, _res, next) => {
	let token;

	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith("Bearer")
	) {
		token = req.headers.authorization.split(" ")[1];
	}

	if (!token) return next(new ErrorResponse("Unauthorized user!", 401));

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		if (!decoded.id) return next(new ErrorResponse("Unauthorized user!", 401));

		req.isAdmin = decoded.admin;

		var user;
		if (req.isAdmin) {
			user = await Admin.findByPk(decoded.id);
		} else {
			user = await Users.findByPk(decoded.id);
		}

		if (!user) return next(new ErrorResponse("Unauthorized user!", 401));

		req.user = user;

		req.createdBy = {
			createdBy: user._id,
		};

		req.updatedBy = {
			updatedBy: user._id,
		};
	} catch (error) {
		// error
		return next(new ErrorResponse("Unauthorized user!", 401));
	}
};

exports.authorized = asnyc = async (req, res, next) => {
	await this.protect(req, res, next);
	next();
};

exports.adminAuthorized = async (req, res, next) => {
	await this.protect(req, res, next);
	if (!req.isAdmin)
		return next(
			new ErrorResponse(
				"Authorized as user! Please sign in with Admin account.",
				401
			)
		);
	next();
};

exports.userAuthorized = async (req, res, next) => {
	await this.protect(req, res, next);
	if (req.isAdmin)
		return next(
			new ErrorResponse(
				"Authorized as admin! Please sign in with User account.",
				401
			)
		);
	next();
};
