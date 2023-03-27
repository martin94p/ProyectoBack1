const connection = require("../config/dbconfig");

//GET ALL EMPLOYEES

const getAllEmployees = async () => {
  const sql = `SELECT * FROM employee`;
  const rows = await connection.query(sql).spread((rows) => rows);
  return rows;
};

//find by id
const getEmployeeById = async (id) => {
  const rows = await connection.query(
      `SELECT * FROM employee WHERE id = ?`,[id]).spread(rows => rows);
  if (rows.length <= 0)
        return res.status(404).json({ message: "empleado no encontrado" });
  else if (rows.length >= 0)
    return  rows;   
  }


//CREATE
const createEmployee = async (values) => {
  const { first_name, last_name, cuit, team_id, join_date, rol } = values;
  
  const result = await connection.query(
      `INSERT INTO employee (first_name, last_name, cuit, team_id, join_date, rol) VALUES (?, ?, ?, ?, ?, ?)`,
      [first_name, last_name, cuit, team_id, join_date, rol]
  ).spread((rows) => rows);

  return result;
}

//DELETE
const deleteEmployee = async (id) => {
  const result = await connection.query(
      `DELETE FROM employee WHERE _id = ?`,
      [id]
  ).spread((rows) => rows);

  // return rows.length > 0 ? rows[0] : []
  if (rows.affectedRows <= 0)
      return res.status(404).json({ message: "el empleado no existe" });

  return result;
}
//UPDATE
const updateEmployee = async (id, values) => {
  const { first_name, last_name, cuit, team_id, join_date, rol } = values;

  const [result] = await connection.query(
      `UPDATE employee SET first_name = IFNULL(?, first_name), last_name = IFNULL(?, last_name), cuit = IFNULL(?, cuit), team_id = IFNULL(?, team_id), join_date = IFNULL(?, join_date), rol = IFNULL(?, rol) WHERE _id = ?`,
      [first_name, last_name, cuit, team_id, join_date, rol, id]
  );

  if (result.affectedRows === 0)
      return res.status(404).json({ message: "el empleado no existe" });

  const rows = await connection.query(
      `SELECT * FROM employee WHERE _id = ?`,
      [id]
  );

  return rows[0];
}

//EXPORTS
module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  deleteEmployee,
  updateEmployee,
};