const express = require("express");
const UserModel = require("../models/UserModel");
const userRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

userRouter.get("/", (req, res) => {
  res.send("All the users");
});

userRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  // Check for duplicate email
  const existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    return res.status(400).json({
      message: "Email is already in use",
      status: 400,
    });
  }

  bcrypt.hash(password, 5, async function (err, hash) {
    if (err) {
      return res.status(500).json({
        message: "Something went wrong",
        status: 500,
        error: err,
      });
    }

    try {
      let user = UserModel({ name, email, password: hash });
      await user.save();
      res.status(201).json({ message: "User created successfully" });
    } catch (err) {
      res.status(500).json({
        message: "Error creating user",
        status: 500,
        error: err,
      });
    }
  });
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let data = await UserModel.findOne({ email });
    if (data) {
      const secret = "Rahul#222";

      let token = jwt.sign({ userId: data._id }, secret);
      bcrypt.compare(password, data.password, async function (err, result) {
        if (err)
          return res.status(err).json({ message: "something went wrong" });
        if (result) {
          res.header("auth", token);
          res.status(200).json({
            message: "User logged in successfully",
            status: 200,
            token: token,
          });
        } else {
          res.status(400).json({
            message: "Incorrect Password",
            status: 400,
          });
        }
      });
    } else {
      res.status(404).send("User Doesn't exist");
    }
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong",
      status: 500,
      error: err,
    });
  }
});
module.exports = userRouter;
