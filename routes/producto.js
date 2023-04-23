var express = require('express');
var router = express.Router();
var ProductController = require('../controllers/producto');

//listar (Funciona)
router.get('/', function(req,res,next){
    ProductController.Listar()
    .then((resp)=>{
        res.render('producto', {resp: resp});
    })
})

//agregar (Funciona)
router.post('/', function(req, res, next){
    ProductController.Agregar(req.body)
    .then(()=>{
        ProductController.Listar()
        .then((resp)=>{
            res.send(resp);
        })
    })
});

//Buscar por id (Funciona)
router.get('/:id', function(req,res,next){
    ProductController.Buscar(req.params.id)
    .then((resp)=>{
        res.send(resp);
    })
})

//Actualizar
router.patch('/:id', function (req, res, next){
    ProductController.Actualizar(req.params.id, req.body)
  .then((resp)=>{
    res.send(resp);
  })
})

//Eliminar por su ID (Funciona)
router.delete('/:id', function(req,res,next){
    ProductController.Eliminar(req.params.id)
    .then((resp)=>{
        res.send(resp);
    })
})

module.exports = router;