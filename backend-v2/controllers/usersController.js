const { response } = require('express')
const db=require('../database/conexion')
class UserController{
    constructor(){

    }

    consultar(req,res){
        try {
            db.query(`SELECT * FROM users;`,
            (err,rows)=>{
                if(err){
                    res.status(400).send(err);
                }
                res.status(200).json(rows);
            });
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
    consultarxdetalle(req,res){
        const {idusers}=req.params;
        try {
            
            db.query(`SELECT * FROM users where  idusers=?;`,[idusers],
            (err,rows)=>{
                if(err){
                    res.status(400).send(err);
                }
                res.status(200).json(rows[0]);
            });
        } catch (error) {
            res.status(500).send(error.message);
        }

    }
    login(req, res) {
        const { email, password } = req.body;
        try {
            db.query(`SELECT * from users WHERE email=? AND password=? AND rol=1;`, [email, password], (err, rows) => {
                if (err) {
                    res.status(400).send(err);
                } else if (rows.length === 0) {
                    res.status(401).send('Email o contraseña incorrectos');
                } else {
                    res.status(200).json(rows);
                }
            });
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    consularclases(req, res){
        const {idusers}=req.params;
        try {
            
            db.query(`SELECT s.subject,courses.name,courses.codigo,courses.level,courses.language, c.grade
                    from classes c
                    INNER JOIN subjects s ON c.subjects=s.idsubjects
                    INNER JOIN studentxcoursexapplication app  ON c.application=app.idstudentxcoursexapplication 
                    INNER JOIN courses courses ON  app.course=courses.idcourses where app.student=?;`,[idusers],
            (err,rows)=>{
                if(err){
                    res.status(400).send(err);
                }
                res.status(200).json(rows);
            });
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    guardar(req,res){
        try {
            const{fullName,dni,age,phone,email,password,rol}=req.body;
            db.query(`INSERT INTO users(fullName,dni,age,phone,email,password,rol) VALUES(?,?,?,?,?,?,?);`,[fullName,dni,age,phone,email,password,rol],(err,rows)=>{
                if(err){
                    res.status(400).send(err);
                }
                res.status(201).json(rows);
            });
            
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    guardarDetalle(req,res){
        try {
            const{fullName,dni,age,phone,email}=req.body;
            db.query(`INSERT INTO users(fullName,dni,age,phone,email,password,rol) VALUES(?,?,?,?,?,'12345',2);`,[fullName,dni,age,phone,email],(err,rows)=>{
                if(err){
                    res.status(400).send(err);
                }
                res.status(201).json(rows);
            });
            
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    actualizar(req,res){
        const {idusers}=req.params;
        try {
            const{fullName,dni,age,phone,email,password,rol}=req.body;
            db.query(`UPDATE users SET fullName=?,dni=?,age=?,phone=?,email=?,password=?,rol=?  WHERE idusers=?`,[fullName,dni,age,phone,email,password,rol,idusers],(err,rows)=>{
                if(err){
                    res.status(400).send(err);
                }
                res.status(201).json(rows);
            });
            
        } catch (error) {
            res.status(500).send(error.message);
        }

    }


}

module.exports= new UserController();