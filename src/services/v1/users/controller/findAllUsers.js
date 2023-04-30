const { Op } = require("sequelize");
const { Users } = require("../../../../database");

module.exports = async (req, _res, next) => {
	// Get Values

	try {
		req.data = await Users.findAndCountAll({
			where: {
				[Op.or]: [
					{
						firstName: {
							[Op.like]: `%${req.search}%`,
						},
					},
					{
						lastName: {
							[Op.like]: `%${req.search}%`,
						},
					},
					{
						username: {
							[Op.like]: `%${req.search}%`,
						},
					},
					{
						email: {
							[Op.like]: `%${req.search}%`,
						},
					},
				],
			},
			attributes: {
				exclude: ["password"],
			},
			offset: req.pagination.skip,
			limit: req.pagination.limit,
		});

		next();

		// On Error
	} catch (error) {
		// Send Error Response
		next(error);
	}
};
