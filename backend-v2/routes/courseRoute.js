const express= require('express');
const  router= express.Router();
const courseRoute= require('../controllers/coursesController');

router.get('/',courseRoute.consultar);

router.post('/',courseRoute.guardar);

router.route('/:idcourses')
    .get(courseRoute.consultarxdetalle)
    .put(courseRoute.actualizar);


module.exports=router;