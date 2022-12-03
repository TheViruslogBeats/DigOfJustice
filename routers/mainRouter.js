const { Router } = require("express");
const mainContorller = require("../controllers/mainContorller")

const router = new Router()

router.post("/sendBid");
router.get("/downloadFile", mainContorller.downloadFile)


router.get("/program", mainContorller.getProgramm)

module.exports = router