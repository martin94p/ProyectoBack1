const express = require('express');
const router = express.router();
const assetsController = require('/controllers/assetsController');

router.get('/', assetsController.getAllAssets);
router.get('/employee/:employeeId', assetsController.getAssetsByEmployeeId);
router.get('/:id', assetsController.getAssetById);
router.post('/', assetsController.createAsset);
router.put('/:id', assetsController.updateAsset);
router.delete('/:id', assetsController.deleteAsset);

module.exports = router;