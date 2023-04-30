const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

exports.upload = multer({
	storage: multer.diskStorage({
		destination: "./storage/attachments",
		filename: (_req, file, cb) => {
			let name = uuidv4() + Date.now() + file.originalname;
			cb(null, name.replaceAll(/-/g, "_").replaceAll(" ", "_"));
		},
	}),
});
