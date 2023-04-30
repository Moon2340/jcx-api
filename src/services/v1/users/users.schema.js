const { adminAuthorized } = require("../../../authentication");
const paginationMiddleware = require("../../../utilities/pagination/pagination.pre.middleware");
const paginationPostMiddleware = require("../../../utilities/pagination/pagination.post.middleware");

module.exports = {
	getAllUsers: [
		paginationMiddleware,
		require("./controller/findAllUsers"),
		paginationPostMiddleware,
	],
	getUserById: require("./controller/findById"),
	updateUserInformation: [
		adminAuthorized,
		require("./controller/updateInformation"),
	],
};
