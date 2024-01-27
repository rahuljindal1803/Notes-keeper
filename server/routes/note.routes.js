const express = require("express");
const NoteModel = require("../models/NoteModel");
const secret = "Rahul#222";
const jwt = require("jsonwebtoken");
const noteRouter = express.Router();

noteRouter.get("/", async (req, res) => {
  let token = req.headers.authorization;
  jwt.verify(token, secret, async (err, decode) => {
    try {
      let data = await NoteModel.find({ user: decode.userId });
      res.status(200).json({ message: "data received", data: data });
    } catch {}
  });
});
noteRouter.post("/create", async (req, res) => {
  console.log(req.body.user);
  try {
    const { title, body, user } = req.body;
    const note = new NoteModel({ title, body, user });
    await note.save();
    res.status(201).json({ message: "Note created successfully" });
  } catch {
    res.status(500).json({ message: "Something went wrong" });
  }
});

noteRouter.patch("/", async (req, res) => {
  console.log(req.headers);
  let { id } = req.headers;
  try {
    await NoteModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).json({ message: "Note updated successfully" });
  } catch (err) {
    res.status(404).json({ message: "Note not found" });
  }
});

noteRouter.delete("/", async (req, res) => {
  let { id } = req.headers;
  try {
    await NoteModel.findByIdAndDelete({ _id: id });
    res.status(200).json({ message: "Note Deleted successfully" });
  } catch (err) {
    res.status(err.code).json({ message: "Note not Deleted" });
  }
});
module.exports = noteRouter;
