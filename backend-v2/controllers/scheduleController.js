const { response } = require('express')
const db=require('../database/conexion')
class ScheduleController{
    constructor(){

    }

    consultar(req,res){
        try {
            db.query(`SELECT * FROM schedules;`,
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
        const {idschedules}=req.params;
        try {
            
            db.query(`SELECT * FROM schedules where  idschedules=?;`,[idschedules],
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

    consultarInfo(req,res){
        const {idusers}=req.params;
        try {
            
            db.query(`SELECT professor.fullName,sub.subject,s.grade,c.name,u.fullName,days.dayOfTheWeek,hours.startTime,hours.finishTime,classroom.classroom_number
                FROM schedules s
                INNER JOIN studentxcoursexapplication app ON  s.application=app.idstudentxcoursexapplication
                INNER JOIN users u ON app.student=u.idusers
                INNER JOIN courses c ON app.course=c.idcourses
                INNER JOIN status st ON app.status=idstatus
                INNER JOIN users professor ON s.professor=professor.idusers
                INNER JOIN subjects sub ON  s.subject=sub.idsubjects
                INNER JOIN days days ON  s.day=days.iddays
                INNER JOIN hours hours ON s.hours=hours.idhours
                INNER JOIN classrooms classroom ON s.classroom=classroom.idclassrooms
                ;`,
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
            const{professor,hours,day,subject,grade,application,classroom}=req.body;
            db.query(`INSERT INTO schedules(professor,hours,day,subject,grade,application,classroom) VALUES(?,?,?,?,?,?,?);`,[professor,hours,day,subject,grade,application,classroom],(err,rows)=>{
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
        const {idschedules}=req.params;
        try {
            const{professor,hours,day,subject,grade,application,classroom}=req.body;
            db.query(`UPDATE schedules SET professor=?,hours=?,day=?,subject=?,grade=?,application=?,classroom=?  WHERE idschedules=?;`,[professor,hours,day,subject,grade,application,classroom,idschedules],(err,rows)=>{
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

module.exports= new ScheduleController();