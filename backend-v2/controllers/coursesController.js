const { response } = require('express')
const db=require('../database/conexion')
class CourseController{
    constructor(){

    }

    consultar(req,res){
        try {
            db.query(`SELECT * FROM courses;`,
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
        const {idcourses}=req.params;
        try {
            
            db.query(`SELECT * FROM courses where  idcourses=?;`,[idcourses],
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

    guardar(req,res){
        try {
            const{name,description,language,level}=req.body;
            const random = Math.random().toString(36).substring(6,12)
            db.query(`INSERT INTO courses(name,description,language,level,codigo) VALUES(?,?,?,?,'${random}');`,[name,description,language,level],(err,rows)=>{
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
        const {idcourses}=req.params;
        try {
            const{name,description,language,level}=req.body;
            const random = Math.random().toString(36).substring(6,12)
            db.query(`UPDATE courses SET name=?,description=?,language=?,level=? WHERE idcourses=?;`,[name,description,language,level,idcourses],(err,rows)=>{
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

module.exports= new CourseController();