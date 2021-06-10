const express = require('express');
// var index_router = require('./routes/index');
const mysql = require('mysql')
var cors = require('cors');
const app = express();
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json());
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "user"
});
con.connect((err)=>{
    console.log(err);
    console.log('Connect');
})
// app.use('/', index_router);
app.post('/api/post',(req,res)=>{
    const {username , email ,password} = req.body;
    con.query("INSERT INTO users (username ,email ,password)  values (?,?,?)" , [username ,email , password] , (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.json({
                message:"User registered"
            })
        }
    })

})
app.listen(4000, () => {
console.log('listening on port 4000');
})