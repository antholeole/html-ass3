const express = require("express");
const { connect } = require("./conn.js");
const { loggedInMiddleware } = require("./user.js");


const router = express.Router();
router.use(loggedInMiddleware);

const COLLECTION = "CART";

router.get("/", async (req, res) => {
    const db = await connect();

    let collection = db.collection(COLLECTION);

    let results = await collection.find({
        userId: req.userId
    }).toArray();

    res.status(200).send(results);
});

/**
 * request body should be like: { "productId": (productId) }
 */
router.post("/", async (req, res) => {
    const db = await connect();

    let collection = db.collection(COLLECTION);

    const prevExisting = await collection.findOne({
        userId: req.userId,
        productId: req.body.productId
    });

    if (prevExisting) {
        res.statusMessage = "there already exists a product with this id in your cart!";
        res.status(400).send();
        return;
    }

    await collection.insertOne({
        userId: req.userId,
        productId: req.body.productId,
        quantity: 1
    });

    res.status(200).send();
});

router.delete("/:productId", async (req, res) => {
    const db = await connect();

    let collection = db.collection(COLLECTION);

    let results = await collection.deleteOne({
        userId: req.userId,
        productId: req.body.productId,
    });

    res.status(200).send(results);
});

// body should be { "quantity": (newQuantity) }
// instead of setting quantity to 0, you should delete
router.patch("/:productId", async (req, res) => {
    const db = await connect();
    let collection = db.collection(COLLECTION);

    console.log(req.userId, req.params.productId);

    const product = await collection.findOne({
        userId: req.userId,
        productId: parseInt(req.params.productId)
    });

    if (product === null) {
        res.statusMessage = `user does not have ${req.params.productId} in the cart`;
        res.status(400).send();
        return;
    }

    await collection.updateOne({ 
        userId: req.userId,
        productId: parseInt(req.params.productId),
     }, { $set: { quantity: req.body.quantity } });

    res.status(200).send();
});

module.exports.router = router;
