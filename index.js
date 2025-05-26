const express = require("express");
const cors = require("cors");
const facts = require("./facts.json");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/funfact", (req, res) => {
  const fact = facts[Math.floor(Math.random() * facts.length)];
  res.json({ fact });
});

app.listen(PORT, () => {
  console.log(`Fun Fact API running on port ${PORT}`);
});
