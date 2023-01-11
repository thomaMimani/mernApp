const express = require('express')
const bodyParser = require('body-parser')
const placesRoutes = require('./routes/places-routes')
const userRoutes = require('./routes/users-routes')
const HttpError = require('./models/http-error')


const app = express()

app.use(bodyParser.json())
app.use(`/api/places`,placesRoutes)
app.use(`/api/user`,userRoutes)

app.use((req,res,next)=>{
    const error = new HttpError('could not find this route',404)
    throw error
})

app.use((error,req,res,next)=>{
    if(res.headerSent){
        return next(error)
    }
    res.status(error.code||500)
    res.json({message:error.message||'An unknown error occurred!'})
})

app.listen(4000)