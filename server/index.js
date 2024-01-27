const express = require("express");
require("dotenv").config();
const authService = require("./middleware/auth");

const cors = require("cors");
const { connection } = require("./db");
const userRouter = require("./routes/user.routes");
const noteRouter = require("./routes/note.routes");
const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api is working");
});
app.use("/user", userRouter);
app.use("/note", authService, noteRouter);

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Database connection established");
  } catch (err) {
    console.log(err);
  }
  console.log("server started on port", PORT);
});
