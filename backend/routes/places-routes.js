const express = require(`express`)
const { getPlaceById,  createPlace, updatePlace, deletePlace, getPlaceByUser } = require("../controllers/places-controller")
const HttpError=require(`../models/http-error`)
const router = express.Router()



router.get(`/:pid`,getPlaceById)

router.get(`/user/:uid`,getPlaceByUser)

router.post('/',createPlace)

router.patch('/:uid',updatePlace)

router.delete(`/:uid`,deletePlace)


module.exports=router