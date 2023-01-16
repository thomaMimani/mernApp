const {v4} = require('uuid')
const HttpError = require('../models/http-error')

const DUMMY_USER=[
    {
        id:'u1',
        email:'Thoma',
        username:'Mimani'
    },
    {
        id:'u2',
        email:'Thoma1',
        username:'Mimani1'
    },
    {
        id:'u3',
        email:'Thoma2',
        username:'Mimani2'
    },

]

const getUser = (req,res,next)=>{
    res.json({DUMMY_USER})
}

const postUser=(req,res,next)=>{
    const { username,email,password } =req.body
    const newUser={
        id:v4(),
        password,
        email,
        username
    }
    const hasuser = DUMMY_USER.find(item=>item.username===username)
    if(!password || !username || !email ){
        throw new HttpError('All forms are required')
    }else if(hasuser){
        throw new HttpError('User exists')
    }
    DUMMY_USER.push(newUser)
    console.log(newUser)
    res.status(201).json({newUser})

}

const login = (req,res,next)=>{
    const {email,password}=req.body
    const identify=DUMMY_USER.find(u=>u.email===email)
    if(!identify || identify.email!==email){
        throw new HttpError('Could not find user',401)
    }
    console.log(identify)
    res.status(201).json({identify})
}

exports.getUser=getUser
exports.postUser=postUser
exports.login=login