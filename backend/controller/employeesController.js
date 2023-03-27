
const employeeModel = require('../model/employeeModel');

// Get all employees
const getAllEmployees = async (req, res) => {
  try {
    const result = await employeeModel.getAllEmployees();

    res.json({ message: 'GET ALL EMPLOYEES', result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get employee by id
const getEmployeeById = async (req, res) => {
  try {
    const {id} = req.params;
    const result = await employeeModel.getEmployeeById(id);
    res.json({message: 'EMPLOYEE_ID', result});
   }
   catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create employee
const createEmployee = async (req, res) => {
  const values = { ...req.body };
  const result = await employeeModel.createEmployee(values);
  const { idEmployee } = result;
  const resultEmployee = await employeeModel.getEmployeById(idEmployee);
  res.json({ message: 'CREATE EMPLOYEE', result: resultEmployee });  
};

// Update employee
const updateEmployee = async (req, res) => {
 try {
    const { id } = req.params;
    const values = { ...req.body };
    const result = await employeeModel.updateEmployee(id, values);

    res.json({ message: 'UPDATE EMPLOYEE', result });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// Delete employee
const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await employeeModel.deleteEmployee(id);

    res.json({ message: 'DELETE EMPLOYEE', result });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};