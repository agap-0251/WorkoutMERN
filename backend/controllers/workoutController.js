const { default: mongoose } = require('mongoose')
const Workout = require('../models/workoutModel')
// Get all workouts
const getWorkouts = async (req,res) => {
    const user_id = req.user._id
    const workouts = await Workout.find({user_id}).sort({createdAt : -1})
    res.status(200).json(workouts)

}

//Get particular workout
const getWorkout = async (req,res) => {

    const workout = await Workout.findById({_id : req.params.id})
    if(!workout) {
      return res.status(404).json({msg : `No record found with id ${req.params.id}`})
    }
    res.status(200).json(workout)   
}

// Create a new workout
const createWorkout = async (req,res) => {
    const {title,load,reps} = req.body
    const user_id = req.user._id
    let emptyFields = []

    if(!title) {
        emptyFields.push('title')
    }
    if(!load) {
        emptyFields.push('load')
    }
    if(!reps) {
        emptyFields.push('reps')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({error : 'Please fill in all the fields',emptyFields})
    }

    try {
        const workout = await Workout.create({title,load,reps,user_id})
        res.status(200).json(workout)
    } catch(error) {
        res.status(400).json({error : error.message})
    }
}

// Update a new workout
const updateWorkout = async (req,res) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(404).json({error : 'No such workout'})
    }
    const workout = await Workout.findOneAndUpdate({_id : req.params.id},
      {...req.body}
    )
    if(!workout) {
        return res.status(400).json({msg : `No such workout`})
    }
    res.status(200).json(workout)
}

// Delete a existing workout
const deleteWorkout = async (req,res) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(404).json({error : 'No such workout'})
    }
    const workout = await Workout.findOneAndDelete({_id : req.params.id})
    if(!workout) {
        return res.status(400).json({msg : `No such workout`})
    }
    res.status(200).json(workout)

}

module.exports = {getWorkouts,getWorkout,createWorkout,deleteWorkout,updateWorkout}
