const express= require('express');
const  router= express.Router();
const userController= require('../controllers/usersController');

router.get('/',userController.consultar);

router.post('/',userController.guardar);
router.post('/formulario',userController.guardarDetalle);
router.post('/login',userController.login);
router.get('/clases/:idusers',userController.consularclases)
router.route('/:idusers')
    .get(userController.consultarxdetalle)
    .put(userController.actualizar);


module.exports=router;