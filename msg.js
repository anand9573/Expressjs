const express = require("express");
const fs = require("fs");
const router = express.Router();

router.get("/login", (req, res, next) => {
  res.send(
    '<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/" method="GET"><input type="text" id="username" name="title" placeholder="Username"><button type="submit">Login</button></form>'
  );
});

module.exports = router;