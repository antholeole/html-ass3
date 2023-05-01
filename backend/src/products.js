const express = require("express");
const { connect } = require("./conn.js");
const { ObjectId } = require("mongodb");

const router = express.Router();
const COLLECTION = "PRODUCTS";

router.get("/", async (req, res) => {
  const db = await connect();

  let collection = db.collection(COLLECTION);
  let results = await collection.find({}).toArray();

  res.send(results).status(200);
});
