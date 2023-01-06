const { Router } = require("express");
const mainContorller = require("../controllers/mainContorller");

const { body } = require("express-validator");

const router = new Router();

router.get("/downloadFile", mainContorller.downloadFile);
router.get("/sections", mainContorller.getRegisterSections);
router.get("/program", mainContorller.getProgramm);
router.get("/pressCenter", mainContorller.getPressCenter)

router.post("/report", body("email").isEmail(), mainContorller.sendReport);
router.post("/speakers", mainContorller.getExperts);

module.exports = router;
