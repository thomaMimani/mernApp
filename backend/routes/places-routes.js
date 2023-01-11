const express = require(`express`)
const {check} = require('express-validator')
const { getPlaceById,  createPlace, updatePlace, deletePlace, getPlaceByUser } = require("../controllers/places-controller")
const HttpError=require(`../models/http-error`)
const router = express.Router()



router.get(`/:pid`,getPlaceById)

router.get(`/user/:uid`,getPlaceByUser)

router.post('/',[
    check('title')
    .not()
    .isEmpty(),
    check('description')
    .isLength({min:5}),
    check('address')
    .not()
    .isEmpty()
],createPlace)


router.patch('/:uid',updatePlace)

router.delete(`/:uid`,deletePlace)


module.exports=router