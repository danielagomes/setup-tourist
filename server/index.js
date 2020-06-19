const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

const scrapeChannel = require("./scrapper");
const db = require("./db");

app.use(express.json());

app.use((req, res, next) => {
  // disable security rules for local development
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/creators", async (req, res) => {
  const creators = await db.getCreators();
  res.json(creators);
});

app.post("/creators", async (req, res) => {
  console.log(req.body);
  const { url } = req.body;
  const { name, img } = await scrapeChannel(url);
  // TODO valid request body

  const creator = await db.insertCreator(name, img, url);
  console.log(creator);
  res.status(201).json(creator);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
