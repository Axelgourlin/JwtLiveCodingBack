const jwt = require("jsonwebtoken");

const createToken = (userEmail = "", user_id = "") => {
  return jwt.sign(
    { userEmail: userEmail, user_id: user_id },
    process.env.PRIVATE_KEY,
    {
      expiresIn: "36000s",
    }
  );
};

module.exports = { createToken };
