const db = require("../database/mysql.db");

function crudRepository(tableName) {
  return {
    create: async function (data) {
      try {
        const [result] = await db.query(`INSERT INTO ${tableName} SET ?`, data);
        return result.insertId;
      } catch (error) {
        throw error;
      }
    },
    findAll: async function () {
      const [rows] = await db.query(`SELECT * FROM ${tableName}`);
      return rows;
    },
    updateById: async function (id, data) {
      const [result] = await db.query(
        `UPDATE ${tableName} SET ? WHERE id = ?`,
        [data, id]
      );
      return result.affectedRows;
    },
    deleteById: async function (id) {
      const [result] = await db.query(`DELETE FROM ${tableName} WHERE id = ?`, [
        id,
      ]);
      return result.affectedRows;
    },
  };
}

module.exports = crudRepository;
