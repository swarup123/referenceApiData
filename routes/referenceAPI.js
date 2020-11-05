const express = require("express");
const referenceController = require("../controller/referenceController");

const router = express.Router();

router
  .route("/reference")
  .post(referenceController.reference);

module.exports = router;
