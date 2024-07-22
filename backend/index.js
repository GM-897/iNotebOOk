require('dotenv').config();
const port = process.env.PORT;
const connectToMongo = require("./db");
const express = require("express");
const cors = require('cors');

connectToMongo();
const app = express();

app.use(cors());

app.use(express.json());
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.get("/", (req, res) => {
  res.send("Hello Manmohit!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
