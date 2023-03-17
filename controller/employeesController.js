const Employee = require('../models/employee');

// Get all employees
const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get employee by id
const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (employee) {
      res.json(employee);
    } else {
      res.status(404).json({ message: 'Employee not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create employee
const createEmployee = async (req, res) => {
  const employee = new Employee({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    cuit: req.body.cuit,
    team_id: req.body.team_id,
    join_date: req.body.join_date,
    rol: req.body.rol,
  });

  try {
    const newEmployee = await employee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update employee
const updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (employee) {
      employee.first_name = req.body.first_name || employee.first_name;
      employee.last_name = req.body.last_name || employee.last_name;
      employee.cuit = req.body.cuit || employee.cuit;
      employee.team_id = req.body.team_id || employee.team_id;
      employee.join_date = req.body.join_date || employee.join_date;
      employee.rol = req.body.rol || employee.rol;

      const updatedEmployee = await employee.save();
      res.json(updatedEmployee);
    } else {
      res.status(404).json({ message: 'Employee not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete employee
const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (employee) {
      await employee.remove();
      res.json({ message: 'Employee deleted' });
    } else {
      res.status(404).json({ message: 'Employee not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};