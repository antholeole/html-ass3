const express = require("express");
const cors = require("cors");
const products = require("./products");


const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

// Load the /posts routes
app.use("/products", products);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});