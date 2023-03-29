const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  product_name: String,
  product_price: String,
  product_discount: String,
  product_discription: String,
});
const product = mongoose.model("product", productSchema);
module.exports = product;
