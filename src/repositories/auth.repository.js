const crudRepository = require("./crud.repository");
const db = require("../database/mysql.db");

const authRepository = {
  ...crudRepository("user"),

  checkUserByEmail: async function (email) {
    const [rows] = await db.query(`SELECT * FROM user WHERE email = ?`, [
      email,
    ]);
    return rows[0];
  },
};

module.exports = authRepository;
