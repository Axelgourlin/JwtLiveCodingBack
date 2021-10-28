const authRouter = require("./auth");

const setupRoutes = (app) => {
  app.use("/auth", authRouter);
};

module.exports = { setupRoutes };
