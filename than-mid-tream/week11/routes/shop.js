// const path = require("path");
// const express = require("express");
// const router = express.Router();

// router.get("/", (req, res, next) => {
//   res.sendFile(path.join(__dirname, "../", "view", "shop.html"));
// });
// // app.use((req, res, next) => {
// //   console.log("Say Fi from another middleware");
// //   res.send("<h1>Hello from Express-Store</h1>");
// // });

// // app.use("/", (req, res, next) => {
// //   console.log("hello Customer");
// //   next();
// // });

// module.exports = router;

const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const adminData = require("./views/path");
// router.get("/", (req, res, next) => {
//   // res.sendFile(path.join(__dirname, '../views/shop.html'));
//   res.sendFile(path.join(rootDir, "views", "shop.html"));
// });

router.get("/", (req, res, next) => {
  // res.sendFile(path.join(__dirname, '../views/shop.html'));
  const.product = adminData;
  res.render("shop", { title: "shop" });
});
module.exports = router;
