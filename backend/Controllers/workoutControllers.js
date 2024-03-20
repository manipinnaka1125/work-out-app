const Workout = require('../models/workoutModel')
//getting all the documents find 

const createWorkout=async(req,res)=>{
    const {title, reps,load} = req.body
  
  try {
    const workout = await Workout.create({title, load, reps})
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}


module.exports={
    createWorkout
}