const express = require('express');
const bodyparser=require('body-parser');
const app=express();

app.use(bodyparser.urlencoded({extended:false}));

app.use('/',(req,res,next)=>{
    console.log('this always runs!')
    next();
});

app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="product" placeholder="product name">&nbsp;<input type="number" name="input_size" placeholder="product size">&nbsp;<button type="submit">Add Product</button></form>');
});
    app.use('/product',(req,res,next)=>{
        res.send(`<h3>Product Name: ${req.body.product}<br> Product size : ${req.body.input_size}</h3>`)
    });
app.use('/',(req,res,next)=>{
    console.log('program ended!')
});

app.listen(4000);
