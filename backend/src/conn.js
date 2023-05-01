const { MongoClient } = require("mongodb");

const connectionString = process.env.MONGO_URI || "";

const client = new MongoClient(connectionString);


module.exports.connect = async () => {
    let conn;

    try {
        conn = await client.connect();
    } catch(e) {
        console.error(e);
    }

    return conn.db("products");
};