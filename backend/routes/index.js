var express = require('express');
var router = express.Router();
const employeeRoutes = require('./employeesRoutes');
const assetRoutes = require('./assetsRoutes');

router.use("/employee", employeeRoutes)
router.use("/asset", assetRoutes)


module.exports = router;