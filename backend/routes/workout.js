const express = require('express')
const {getWorkouts,getWorkout,createWorkout, deleteWorkout, updateWorkout} = require('../controllers/workoutController')
const requireAuth = require('../middleware/requireAuth')
const router = express.Router()

//Protecting the routes - Authorization
router.use(requireAuth)

// Get all workouts
router.get("/",getWorkouts)

//Get particular workout
router.get("/:id", getWorkout)

// Create a new workout
router.post("/",createWorkout)

// Update a new workout
router.put("/:id",updateWorkout)

// Delete a existing workout
router.delete("/:id",deleteWorkout)

// router.post("/api/workout",(req,res) => {
//     const {reps, type} = req.body
//     log(reps,type)
//     res.send("ok")
// })

module.exports = router