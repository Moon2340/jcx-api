const fs = require("fs");

module.exports = async (req, res, next) => {
	// Get Values

	try {
		const filename = `./storage/attachments/${req.params.filename}`;
		res.attachment(filename);
		res.send(fs.readFileSync(filename));
		// On Error
	} catch (error) {
		// Send Error Response
		next(error);
	}
};
