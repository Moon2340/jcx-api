const express = require("express");
const router = express.Router();

router.use(
	"/admin",
	require("./admin")
	// #swagger.tags = ['Admin']
);

router.use(
	"/authentication",
	require("./authentication")
	// #swagger.tags = ['Authentication']
);

router.use(
	"/users",
	require("./users")
	// #swagger.tags = ['Users']
);

module.exports = router;
