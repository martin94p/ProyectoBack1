const express = require("express");
const router = express.Router();
const assetsController = require("../controller/assetsController"); //controlador

  


//const {validatorAsset}= require("../validators/assetsValidator");//validador

router.get('/', assetsController.getAllAssets);
router.get('/:id', assetsController.getAssetById);
router.get('/:id', assetsController.getAssetsByEmployeeId);
router.post('/', assetsController.createAsset);
router.put('/:id', assetsController.updateAsset);
router.delete('/:id', assetsController.deleteAsset);

module.exports = router;
