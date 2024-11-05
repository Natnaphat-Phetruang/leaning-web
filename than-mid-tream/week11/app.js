// const http = require("http");

// const express = require("express");
// const bodyParser = require("body-parser");
// const adminRoutes = require("./routes/admin");
// const shopRoutes = require("./routes/shop");
// const path = require("path");

// // middleware
// const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use("/admin", adminRoutes);
// app.use(shopRoutes);

// app.use((req, res, next) => {
//   res.status(404).sendFile(__dirname, "../", "view", "404.html");
// });
// // const server = http.createServer(app);
// // server.listen(3000);
// app.listen(3000);

const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engin", "ejs");
app.set("view", "view");
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routess);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
