const express = require("express");
const { connect } = require("./conn.js");

const router = express.Router();
const COLLECTION = "USERS";


router.post("/login", async (req, res) => {
    const db = await connect();

    const { username, password } = req.body;

    if (username == undefined || password == undefined) {
        res.statusMessage = "Please submit both a username and password";
        res.status(400).send();
        return;        
    }

    let collection = db.collection(COLLECTION);
    let result = await collection.findOne({
        username: username,
    });

    if (!result) {
        res.statusMessage = `No user with name ${username}`;
        res.status(404).send();
        return;
    }
    
    if (result.password !== password) {
        res.statusMessage = "Incorrect password!";
        res.status(400).send();
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

    if (result) { 
        res.statusMessage = "There already is a user with that name";
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
        res.statusMessage = "Could not insert user into database";
        res.status(400).send(e);
        return;
    }

    res.status(204).send({
        key: user.key
    });
});

const loggedInMiddleware = async (req, res, next) => {
    const apiKey = req.headers['apikey'];

    if (!apiKey) {
        res.status(401).send();
        return;
    }
    
    const db = await connect();
    let collection = db.collection(COLLECTION);
    let result = await collection.findOne({ key: apiKey });

    if (result === null) {
        res.status(401).send();
        return;
    }

    req.userId = result._id.toString();
    next()
};


module.exports = { router, loggedInMiddleware };
