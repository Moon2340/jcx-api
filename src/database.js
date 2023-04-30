const Sequelize = require("sequelize");
const { DB } = require("./configuration");

const Connection = new Sequelize(DB);

const db = {
	Sequelize,
	Connection,
};

// Import Database to a base exports
db.Users = require("./services/v1/users/users.model")(Connection, Sequelize);
db.Admin = require("./services/v1/admin/admin.model")(Connection, Sequelize);

module.exports = db;
