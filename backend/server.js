require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const {log} = require('console')
const workoutRoutes = require('./routes/workout')
const userRoutes = require('./routes/users')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))

//middleware
app.use((req,res,next) => {
    log(req.method, req.path)
    next()
})

app.use("/api/workouts",workoutRoutes)
app.use('/api/user',userRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests
        app.listen((process.env.PORT || 3500),() => {
            log(`Connected to db and Server started on PORT ${process.env.PORT || 3500}`)
        })
    })
    .catch((err) => {
        log(err)
    })

// app.listen((process.env.PORT || 3500),() => {
//     log(`Connected to db and Server started on PORT ${process.env.PORT || 3500}`)
// })



