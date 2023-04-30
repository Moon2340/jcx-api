const { adminAuthorized } = require("../../../authentication");

module.exports = {
	login: require("./controller/login"),
	validate: [adminAuthorized, require("./controller/validate")],
	register: require("./controller/register"),
	updateProfile: [adminAuthorized, require("./controller/updateProfile")],
};
