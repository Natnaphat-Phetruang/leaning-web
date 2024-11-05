// const path = require("path");
// const express = require("express");
// const router = express.Router();
// // router.use("/app-product", (req, res, next) => {
// //   console.log("Say Hi from middleware");
// //   res.send(
// //     '<form action ="/admin/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
// //   );
// // });
// router.get("/add", (req, res, next) => {
//   res.sendFile(path.join(__dirname, "../", "view", "add-porduct.html"));
// });

// router.post("/product", (req, res, next) => {
//   console.log(req.body);
//   res.redirect("/");
// });
// module.exports = router;

const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/add-product");
  {
    title: "Add Product (ejs)";
  }
});

exports.routes = router;
exports.products = products;
