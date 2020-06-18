const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
  // disable security rules for local development
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
// mock data
const creators = [
  { name: "Code Drip", img: "https://" },
  { name: "Code Drip", img: "https://" },
  { name: "Code Drip", img: "https://" },
];

app.get("/creators", (req, res) => {
  res.json(creators);
  // TODO get creators from DB
});

app.post("/creators", (req, res) => {
  console.log(req.body);
  // TODO valid request body
  creators.push(req.body);
  console.log(creators);
  res.sendStatus(201);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
