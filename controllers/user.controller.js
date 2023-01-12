const user = require("../models/user.model");

const getUsers = async (req, res) => {
  try {
    const getUsers = await user.find();
    res.status(200).json(getUsers);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = await user.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const uuser = await user.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(uuser);
  } catch (error) {
    res.status(500).json(error);
  }
};


module.exports = {
  getUsers,
  createUser,
  updateUser,
};
