const express = require('express');
const router = express.router();
const {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} = require('/controllers/employeesController');
const {
  getAllAssets,
  getAssetsByEmployeeId,
  getAssetById,
  createAsset,
  updateAsset,
  deleteAsset,
} = require('/controllers/assetsController');

// Employees routes
router.get('/employees', getAllEmployees);
router.get('/employees/:id', getEmployeeById);
router.post('/employees', createEmployee);
router.put('/employees/:id', updateEmployee);
router.delete('/employees/:id', deleteEmployee);

// Assets routes
router.get('/assets', getAllAssets);
router.get('/employees/:employeeId/assets', getAssetsByEmployeeId);
router.get('/assets/:id', getAssetById);
router.post('/assets', createAsset);
router.put('/assets/:id', updateAsset);
router.delete('/assets/:id', deleteAsset);


module.exports = router;