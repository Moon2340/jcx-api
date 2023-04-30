const bcrypt = require("bcryptjs");

module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define("user", {
		firstName: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		lastName: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		email: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true, // checks for email format (foo@bar.com)
			},
		},
		username: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false,
		},
	});

	User.beforeCreate(async (user) => {
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(user.password, salt);
		user.password = hashedPassword;
	});

	return User;
};
