const express= require('express');
const  router= express.Router();
const ScheduleController= require('../controllers/scheduleController');
const scheduleController = require('../controllers/scheduleController');

router.get('/',scheduleController.consultar);

router.post('/',scheduleController.guardar);
router.get('/info/:idusers',scheduleController.consultarInfo)

router.route('/:idschedules')
    .get(scheduleController.consultarxdetalle)
    .put(scheduleController.actualizar);


module.exports=router;