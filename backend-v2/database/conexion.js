const mysql = require ('mysql2');
const db= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'AdminDB123',
    database:'cdl_v2'
});
db.connect((error)=>{
    if(error){
        throw error;
    }
    console.log('Database connected');
});

module.exports=db;