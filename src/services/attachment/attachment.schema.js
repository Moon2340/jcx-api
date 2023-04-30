const { authorized } = require("../../authentication");
const { upload } = require("../../utilities/upload/upload.pre.middleware");

module.exports = {
	create: [authorized, upload.single("File"), require("./controller/create")],
	get: [require("./controller/findByURL")],
};
