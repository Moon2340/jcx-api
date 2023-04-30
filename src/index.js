const { PORT } = require("./configuration");
const app = require("./app");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger.json");
const errorMiddleware = require("./utilities/error/error.middleware");
const paginationMiddleware = require("./utilities/pagination/pagination.pre.middleware");

// Middleware Pagination
// app.use(paginationMiddleware);

// API Routes
app.use("/api", require("./services"));

// Redirect to the Documentation
app.get("/", function (_req, res) {
	// #swagger.ignore = true
	res.redirect("/doc");
});

// Swagger UI
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

// Middleware Error Handler
app.use(errorMiddleware);

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
