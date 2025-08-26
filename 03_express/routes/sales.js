const express = require("express");
const router = express.Router();

router.get("/", (req, resp) => {
  console.log("/판매의 root 경로");
  resp.send("/판매의 root 경로");
});

router.post("/", (req, resp) => {
  console.log("/판매의 root 경로");
  resp.send("/판매의 root 경로");
});

module.exports = router;
