const { Router } = require("express");
const adminController = require("../controllers/adminController");

const router = new Router();

router.get("/program", adminController.getProgramm);

router.get("/sections", adminController.getSections);

router.get("/experts", adminController.getExperts)

router.get("/news", adminController.getNews)

module.exports = router;
