var express = require("express");
var router = express.Router();
var createError = require("http-errors"); //상단에 추가

router.use("/api/user", require("./api/user"));

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
