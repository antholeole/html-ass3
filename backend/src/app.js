const express = require("express");
const cors = require("cors");

const { router: products } = require("./products");
const { router: users } = require("./user");
const { router: cart } = require("./cart");



const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/products", products);
app.use("/users", users);
app.use("/cart", cart);


app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});