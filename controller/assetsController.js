const Asset = require('../models/asset');

// Get all assets
const getAllAssets = async (req, res) => {
  try {
    const assets = await Asset.find();
    res.json(assets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get assets by employee id
const getAssetsByEmployeeId = async (req, res) => {
  try {
    const assets = await Asset.find({ employee_id: req.params.employeeId });
    res.json(assets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get asset by id
const getAssetById = async (req, res) => {
  try {
    const asset = await Asset.findById(req.params.id);
    if (asset) {
      res.json(asset);
    } else {
      res.status(404).json({ message: 'Asset not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create asset
const createAsset = async (req, res) => {
  const asset = new Asset({
    name: req.body.name,
    type: req.body.type,
    code: req.body.code,
    marca: req.body.marca,
    description: req.body.description,
    purchase_date: req.body.purchase_date,
    employee_id: req.body.employee_id,
  });

  try {
    const newAsset = await asset.save();
    res.status(201).json(newAsset);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update asset
const updateAsset = async (req, res) => {
  try {
    const asset = await Asset.findById(req.params.id);
    if (asset) {
      asset.name = req.body.name || asset.name;
      asset.type = req.body.type || asset.type;
      asset.code = req.body.code || asset.code;
      asset.marca = req.body.marca || asset.marca;
      asset.description = req.body.description || asset.description;
      asset.purchase_date = req.body.purchase_date || asset.purchase_date;
      asset.employee_id = req.body.employee_id || asset.employee_id;

      const updatedAsset = await asset.save();
      res.json(updatedAsset);
    } else {
      res.status(404).json({ message: 'Asset not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete asset
const deleteAsset = async (req, res) => {
  try {
    const asset = await Asset.findById(req.params.id);
    if (asset) {
      await asset.remove();
      res.json({ message: 'Asset deleted' });
    } else {
      res.status(404).json({ message: 'Asset not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllAssets,
  getAssetsByEmployeeId,
  getAssetById,
  createAsset,
  updateAsset,
  deleteAsset,
};