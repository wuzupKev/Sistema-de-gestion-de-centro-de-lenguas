const express= require('express');
const  router= express.Router();
const applicationRoute= require('../controllers/applicationController');

router.get('/',applicationRoute.consultaraplicantes);
router.get('/info',applicationRoute.consultar);
router.post('/',applicationRoute.guardar);

router.route('/:idstudentxcoursexapplication')
    .get(applicationRoute.consultarxdetalle)
    .put(applicationRoute.actualizar);


module.exports=router;