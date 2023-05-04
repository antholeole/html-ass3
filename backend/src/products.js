const express = require("express");
const { connect } = require("./conn.js");
const { ObjectId } = require("mongodb");

const router = express.Router();
const COLLECTION = "PRODUCTS";

router.get("/", async (req, res) => {
  const db = await connect();

  let collection = db.collection(COLLECTION);
  let results = await collection.find({}).toArray();

  res.status(200).send(results);
});

router.get("/:productId", async (req, res) => {
  const db = await connect();

  let collection = db.collection(COLLECTION);
  let result = await collection.findOne({ _id: parseInt(req.params.productId) });

  if (!result) {
    res.status(404).send();
    return;
  }

  res.status(200).send(result);
});

router.post("/", async (req, res) => {
  const db = await connect();

  let collection = db.collection(COLLECTION);

  let product = { ...req.body, _id: req.body.id };

  try {
    await collection.insertOne(product);
  } catch(e) {
    res.status(400).send(e);
    return;
  }

  res.status(204).send();
});

router.patch("/:productId", async (req, res) => {
  const db = await connect();
  let collection = db.collection(COLLECTION);

  await collection.updateOne({ _id: parseInt(req.params.productId) }, { $set: req.body });
π
  res.status(204).send();
});

router.delete("/:productId", async (req, res) => {
  const db = await connect();
  let collection = db.collection(COLLECTION);

  const delOut = await collection.deleteOne({ _id: parseInt(req.params.productId) });

  if (delOut.deletedCount === 0) {
    res.status(404).send();
    return;
  }

  res.status(204).send();
});

module.exports.router = router;
