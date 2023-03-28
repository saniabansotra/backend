const mongoose = require("mongoose");
const productSchema = new Schema({
  product_name: String,
  product_price: String,
  product_discount: String,
  product_discription: String,
  product_image: String,
});
const product = mongoose.model("user", productSchema);
module.export = product;
