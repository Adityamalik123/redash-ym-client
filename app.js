const express = require("express");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const csurf = require("csurf");

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(helmet());
app.use(cookieParser());
app.use(csurf({ cookie: true }));
app.use((req, res, next) => {
  res.cookie("_csrf", req.csrfToken());
  next();
});
app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function (req, res) {
  // needs to be /* to support the routing we are using in the client - Browser Router
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(3000, () => {
  console.log("listening on port 3000");
});
