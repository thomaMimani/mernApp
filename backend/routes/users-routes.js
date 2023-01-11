const express = require(`express`)
const router = express.Router()

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

router.get(`/:uid`,(req,res,next)=>{
    const userId =req.params.uid
    const user=DUMMY_USER.find(item=>item.id===userId)
    res.json({user})
})

module.exports=router