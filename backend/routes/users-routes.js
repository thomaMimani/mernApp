const express = require(`express`)
const { getUser, postUser, login } = require("../controllers/users-controller")
const router = express.Router()



router.get(`/`,getUser)
router.post(`/signUp`,postUser)
router.post(`/login`,login)


module.exports=router