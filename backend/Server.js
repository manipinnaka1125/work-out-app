require('dotenv').config()
const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.json({mssg:'welcome tot he app'})
})
app.listen(process.env.PORT,()=>{
    console.log('hello this is maniswaroop',process.env.PORT);
})
