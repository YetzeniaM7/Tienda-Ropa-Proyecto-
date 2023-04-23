var express = require('express');
var router = express.Router();
var ProveController = require('../controllers//proveedor');

//listar (Funciona)
router.get('/', function(req,res,next){
    ProveController.Listar()
    .then((resp)=>{
        res.render('proveedor', {resp: resp});
    })
})

router.get('/sesion', validarToken, function(req, res, next) {
    var payload = jwt.decode(req.headers.authorization.replace('Bearer ', ''))
    if (payload.roles.includes("Admin")) {
    res.send('Bienvenido Admin!')

//agregar (Funciona)
router.post('/', function(req, res, next){
    ProveController.Agregar(req.body)
    .then(()=>{
        ProveController.Listar()
        .then((resp)=>{
            res.send(resp);
        })
    })
});

//Buscar por id (Funciona)
router.get('/:id', function(req,res,next){
    ProveController.Buscar(req.params.id)
    .then((resp)=>{
        res.send(resp);
    })
})

//Actualizar
router.patch('/:id', function (req, res, next){
    ProveController.Actualizar(req.params.id, req.body)
  .then((resp)=>{
    res.send(resp);
  })
})

//Eliminar por su ID (Funciona)
router.delete('/:id', function(req,res,next){
    ProveController.Eliminar(req.params.id)
    .then((resp)=>{
        res.send(resp);
    })
})
    } else {
      res.send("¡Solo el admin esta autorizado!")
    }
  });


module.exports = router;
