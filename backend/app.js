const express = require('express')
const bodyParser = require('body-parser')
const placesRoutes = require('./routes/places-routes')
const userRoutes = require('./routes/users-routes')
const mysql = require('mysql')
const HttpError = require('./models/http-error')

// create connection
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'nodemysql'
})
//onnect
db.connect((err)=>{
    if(err){
        throw err
    }
   
})
const app = express()
let cors = require('cors')
app.use(cors())

app.use(bodyParser.json())
app.get('/createTable',(req,res)=>{
    let sql = `Create Table Users(user_id CHAR(20),password CHAR(20),username CHAR(20),email CHAR(20), PRIMARY KEY (user_id));`
    db.query(sql,(err,result)=>{
        if(err){
            throw err
        }
        console.log(result)
    })
})
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