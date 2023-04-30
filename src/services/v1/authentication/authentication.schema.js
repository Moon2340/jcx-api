const { userAuthorized } = require("../../../authentication");

module.exports = {
	login: require("./controller/login"),
	validate: [userAuthorized, require("./controller/validate")],
	register: require("./controller/register"),
	updateProfile: [userAuthorized, require("./controller/updateProfile")],
};
