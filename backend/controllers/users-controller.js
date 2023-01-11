const {v4} = require('uuid')
const HttpError = require('../models/http-error')

const DUMMY_USER=[
    {
        id:'u1',
        name:'Thoma',
        last_name:'Mimani'
    },
    {
        id:'u2',
        name:'Thoma1',
        last_name:'Mimani1'
    },
    {
        id:'u3',
        name:'Thoma2',
        last_name:'Mimani2'
    },

]

const getUser = (req,res,next)=>{
    res.json({DUMMY_USER})
}

const postUser=(req,res,next)=>{
    const { name,last_name } =req.body
    const newUser={
        id:v4(),
        name,
        last_name 
    }
    const hasuser = DUMMY_USER.find(item=>item.name===name)
    if(hasuser){
        throw new HttpError('User exists')
    }
    DUMMY_USER.push(newUser)
    res.status(201).json({newUser})

}

const login = (req,res,next)=>{
    const {name,last_name}=req.body
    const identify=DUMMY_USER.find(u=>u.name===name)
    if(!identify || identify.last_name!==last_name){
        throw new HttpError('Could not find user',401)
    }
    res.status(201).json({identify})
}

exports.getUser=getUser
exports.postUser=postUser
exports.login=login