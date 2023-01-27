const {createPool} = require('mysql')

const pool = createPool({
    host:'localhost',
    user:'root',
    password:''
    
})

pool.query(`select*from user`)