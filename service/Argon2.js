const argon2 = require("argon2");

const hashPassword = (password) => {
  return argon2.hash(password);
};

const verifyPassword = (hashedPassword, password) => {
  const res = argon2.verify(hashedPassword, password);
  return res;
};

module.exports = { hashPassword, verifyPassword };
