const express = require("express");
const { connect } = require("./conn.js");

const router = express.Router();
const COLLECTION = "USERS";


router.post("/login", async (req, res) => {
    const db = await connect();

    const { username, password } = req.body;

    let collection = db.collection(COLLECTION);
    let result = await collection.findOne({ 
        username: username,
        password: password
    });

    if (!result) {
        res.status(404).send();
        return;
    }   

    if (result.password == password) {
        res.status(200).send(result.key);
    }
});

router.post("/register", async (req, res) => {
    const db = await connect();

    let collection = db.collection(COLLECTION);

    let result = await collection.findOne({ username: req.body.username });

    if (result) { // already a user
        res.status(400).send();
        return;
    }

    let user = {
        username: req.body.username,
        password: req.body.password,
        key: Buffer.from(Math.random().toString()).toString("base64")
    };

    try {
        await collection.insertOne(user);
    } catch (e) {
        res.status(400).send(e);
        return;
    }

    res.status(204).send({
        key: user.key
    });
});


module.exports.router = router;
