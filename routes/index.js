const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({
  dest: "tmp/",

  limits: { fileSize: 3000000 }
});
const fs = require("fs");
const path = require("path");

router.post("/uploaddufichier", upload.array("monfichier", 2), function(
  req,
  res,
  next
) {
  for (let i = 0; i < req.files.length; i++) {
    fs.rename(
      req.files[i].path,
      "public/images/" + req.files.originalname,
      function(err) {
        if (err) {
          res.send("problème durant le déplacement");
        } else {
          res.send("Fichier uploadé avec succès");
        }
      }
    );
  }
});

module.exports = router;
