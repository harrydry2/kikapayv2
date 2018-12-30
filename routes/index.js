const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

router.get("/", mainController.home);
router.get("/about", mainController.about);
router.get("/customers", mainController.customers);
router.get("/partners", mainController.partners);

// mail
router.post("/sendmail", mainController.sendmail);

module.exports = router;
