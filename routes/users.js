var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("Hey ! It's a GET");
});

/* GET user with ID. */
router.get("/:id(\\d+)", function(req, res, next) {
  res.send("Hey ! It's a GET with ID " + req.params.id);
});

/* POST user creation. */
router.post("/", function(req, res, next) {
  res.send("Hey ! It's a POST");
});

router.put("/users/:name", function(req, res, next) {
  res.send("Hey ! My name is " + req.params.name);
});

router.delete("/users/:id(\\d+)", function(req, res, next) {
  res.send("Hey ! It's a DELETE ID " + req.params.id);
});

module.exports = router;
