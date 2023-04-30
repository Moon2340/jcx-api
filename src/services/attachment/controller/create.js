module.exports = async (req, res, next) => {
	// Get Values
	try {
		res.status(201).json({
			success: true,
			data: req.file || "No Files",
			message: `Attachments uploaded successfully`,
		});
		// On Error
	} catch (error) {
		// Send Error Response
		next(error);
	}
};
