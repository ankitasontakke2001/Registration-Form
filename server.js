const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  res.json({ message: "Login successful", email });
});

app.post("/api/register", (req, res) => {
  const { name, email, password } = req.body;
  res.json({ message: "Registration successful", name });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
