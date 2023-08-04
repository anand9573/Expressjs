const express = require("express");
const fs = require("fs");
const router = express.Router();

router.get("/", (req, res, next) => {
  fs.readFile("message.txt", { encoding: "utf-8" }, (err, data) => {
    if (err) {
      console.log(err);
      data = "No Chat Exists";
    }
    res.send(
      `<div>${data}</div><form action='/' onsubmit="document.getElementById('username').value=localStorage.getItem('username')" method='POST'><br>
      <input type='text' id="message" name='message' placeholder='Message'>
      <input type="hidden" name="username" id="username">
      <button type='submit'>Send</button></form>`
    );
  });
});

router.post("/", (req, res, next) => {
  console.log(`${req.body.username} : ${req.body.message}`);
  let chat = ` ${req.body.username} : ${req.body.message}`;
  fs.writeFile("message.txt", chat, { flag: "a" }, (err) => {
    err ? console.log(err) : res.redirect("/");
  });
});

module.exports = router;