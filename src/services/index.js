const express = require("express");
const router = express.Router();

router.use(
	"/attachment",
	require("./attachment")
	// #swagger.tags = ['Attachment']
);

router.use("/v1", require("./v1"));

module.exports = router;
