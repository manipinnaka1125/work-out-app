require('dotenv').config()
const mongoose=require('mongoose')
const express = require('express')
const workoutRoutes = require('./routes/workouts')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})
mongoose.connect(process.env.MONG_URI)
.then(()=>{
  app.listen(process.env.PORT,()=>{
    console.log('connected to db& listening port is :',process.env.PORT)
  })
})
.catch((error)=>{
  console.log("error")
})
// routes
app.use('/work', workoutRoutes)

// listen for requests
