const express=require("express");
const bodyParser=require('body-parser');
const app=express();
const path=require('path')
const port=3000;

app.use(bodyParser.urlencoded({extended:false}))
//this will enocde the body that we will receive from input type of form html


//Routes
const adminRouter=require('./routes/admin');
const shopRouter=require('./routes/shop')

app.use('/admin',adminRouter)
app.use(shopRouter)
//here we can use this route prior to adminRouter as shop route is using get function this will not trigger the shoprouter when we enter the admin route
//In case of app.use shopRouter will be triggered ("/")


app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})



app.listen(`${port}`,()=>{
    console.log(`Listening to port: ${port}`)
})
