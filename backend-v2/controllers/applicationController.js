const { response } = require('express')
const db=require('../database/conexion')
class ApplicationController{
    constructor(){

    }

    consultar(req,res){
        try {
            db.query(`SELECT * FROM studentxcoursexapplication;`,
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
        const {idstudentxcoursexapplication}=req.params;
        try {
            
            db.query(`SELECT * FROM studentxcoursexapplication where  idstudentxcoursexapplication=?;`,[idstudentxcoursexapplication],
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

    consultaraplicantes(req,res){
        try {
            db.query(`SELECT u.idusers, u.fullName, u.phone,u.age,c.name,c.codigo,c.language,c.level,s.status
                        FROM studentxcoursexapplication a
                        INNER JOIN courses c ON a.course=c.idcourses
                        INNER JOIN users u ON  a.student=u.idusers
                        INNER JOIN status s ON a.status=s.idstatus;`,
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
            const{student,course}=req.body;
            db.query(`INSERT INTO studentxcoursexapplication(student,course,status) VALUES(?,?,1);`,[student,course],(err,rows)=>{
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
        const {idstudentxcoursexapplication}=req.params;
        try {
            const{student,course,status}=req.body;
            db.query(`UPDATE studentxcoursexapplication SET student=?,course=?,status=? WHERE idstudentxcoursexapplication=?;`,[student,course,status,idstudentxcoursexapplication],(err,rows)=>{
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

module.exports= new ApplicationController();