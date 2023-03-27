const express = require("express");
const router = express.Router();
const employeesController = require("../controller/employeesController"); 




//const {validatorEmployee}= require("../validators/employeeValidator");  

//metodos para obtener la informacion
router.get('/', employeesController.getAllEmployees);
router.get('/:id', employeesController.getEmployeeById);
router.post('/', employeesController.createEmployee);
router.put('/:id', employeesController.updateEmployee);
router.delete('/:id', employeesController.deleteEmployee);

module.exports = router;