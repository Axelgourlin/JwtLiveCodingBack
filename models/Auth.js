const connection = require("../config-db");
const db = connection.promise();

const findUsers = async () => {
  try {
    const users = await db.query("SELECT * FROM user");
    return users[0];
  } catch (error) {
    return Promise.reject(error);
  }
};

const findByEmail = async (email) => {
  try {
    const user = await db.query("SELECT * FROM user WHERE user_ident = ?", [
      email,
    ]);
    return user[0][0];
  } catch (error) {
    return Promise.reject(error);
  }
};

const create = async (email, hashedPassword) => {
  try {
    const response = await db.query(
      "INSERT INTO user (user_ident, user_password) VALUES (?,?)",
      [email, hashedPassword]
    );
    console.log(response[0]);
    return response[0];
  } catch (error) {
    return Promise.reject(error);
  }
};

module.exports = { findUsers, findByEmail, create };
