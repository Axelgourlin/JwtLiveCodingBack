const authRouter = require("express").Router();
const Auth = require("../models/Auth");

authRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;
});

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = Auth.findByEmail(email);
    if (!user || user.length <= 0) {
      throw new Error("NOT_FOUND");
    }
    // Verifier le Password du front ===  password bdd
    console.log("Succes");
  } catch (error) {
    if (error.message === "NOT_FOUND") {
      return res.status(401).json({ auth: false, message: "User not found" });
    }

    return res.status(500).json("Error server");
  }
});

module.exports = authRouter;
