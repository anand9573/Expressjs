const express=require('express')
const bodyparser=require('body-parser')

const app=express();
const adminRoutes=require('./routes/admin')
const shopRoutes=require('./routes/shop')

app.use(bodyparser.urlencoded({extended:false}));

app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);
app.use((req,res,next)=>{
    res.status(404).send('<h2>Page Not Found&#10071; Check URL and try again &#128531</h2>')
})
app.listen(4000);