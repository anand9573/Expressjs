const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const loginRoute = require("./group_chat_app/login");
const msgRoute = require("./group_chat_app/msg");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(loginRoute);
app.use(msgRoute);
app.use((req,res,next)=>{
    res.status(404).send('<h2>Page Not Found&#10071; Check URL and try again &#128531</h2>')
})
app.listen(4000);