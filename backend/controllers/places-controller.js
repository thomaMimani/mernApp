const HttpError=require(`../models/http-error`)
const {v4} = require('uuid')
const {validationResult}= require('express-validator')

let DUMMY_PLACES = [
    {
        id: 'p1',
        title:'Empire State Building',
        description:'HElloooothere',
        location:{
            lat:40.7484474,
            lng:-73.9871516
        },
        address: 'something', 
        creator:'u1'

    },
    {
        id: 'p2',
        title:'Empire State Building',
        description:'HElloooothere',
        location:{
            lat:40.7484474,
            lng:-73.9871516
        },
        address: 'something', 
        creator:'u2'

    },
    
]



const getPlaceById=(req,res,next)=>{
    const placeId = req.params.pid
    const place = DUMMY_PLACES.find((item)=>{
        return item.id===placeId
    })

    if(!place){
        throw new HttpError('Could not find a plase with provided id',404)
    }

    res.json({place})
}

const getPlacesByUser = (req,res,next)=>{
    const userId = req.params.uid
    const place = DUMMY_PLACES.filter(item=>item.creator===userId)
    if(!place || place.length===0){
      return next(
        new Error('Could not find a place for the provided id',422)
        )
      
    }
    res.json(place)
}

const createPlace=(req,res,next)=>{
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        throw new HttpError('Please check title and description',404)
    }
    const { title,description,address,creator,coordinates } =req.body
    const createdPlace={
        id:v4(),
        title,
        description,
        location:coordinates,
        creator,
        address
    }
    DUMMY_PLACES.push(createdPlace)

    res.status(201).json(createdPlace)
}

const updatePlace = (req,res,next)=>{
    const placeId = req.params.pid
    const { title,description } =req.body
    const updatePlace={...DUMMY_PLACES.find(item=>item.id===placeId)}
    const placeIndex=DUMMY_PLACES.findIndex(p=>p.id===placeId)
    updatePlace.title=title,
    updatePlace.description=description
    DUMMY_PLACES[placeIndex]=updatePlace

    res.status(200).json({place:updatePlace})

}
const deletePlace = (req,res,next)=>{
    const placeId = req.params.pid
    DUMMY_PLACES.filter(item=>item.id!==placeId)
    res.status(200).json({DUMMY_PLACES})

}
exports.getPlaceById=getPlaceById
exports.getPlaceByUser=getPlacesByUser
exports.createPlace=createPlace
exports.updatePlace=updatePlace
exports.deletePlace=deletePlace