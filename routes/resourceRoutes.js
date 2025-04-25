const express = require("express");
const Resource = require("../models/resource.model");
const router = express.Router();

//GET
router.get("/", async (req, res) => {
  try {
    const resources = await Resource.find();
    res.status(200).json(resources);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//POST create a new resource
router.post("/", async (req, res) => {
  try {
    const resource = await Resource.create(req.body);
    res.status(200).json(resource);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
