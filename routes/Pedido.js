var express = require('express');
var router = express.Router();
var PController = require("../controllers/Pedido");
var validarToken = require('../authorization/validation')
var jwt = require('jsonwebtoken');

       


router.get('/', function(req, res, next) {
    PController.Listar()
    .then((resp)=>{   
        res.render('pedido', {resp: resp});
    })  
});


//Consultar equipos por id
        router.get("/:id", function(req, res, next) {
            PController.Buscar(req.params.id)
            .then((resp)=>{
                res.render('pedido', {resp: resp});
                res.send(console.log(resp))
                })
        });

        //Insertar registros **
    router.post('/', function(req, res, next) {
        PController.Crear(req.body)
        .then((resp)=>{
            res.send(console.log(resp))
     })
    });
    //Actualizar Registros
    router.patch("/:id", function(req, res, next) {
        PController.Actualizar(req.params.id , req.body)
        .then((resp)=>{
            res.send(console.log(resp))
     })
    });
    //Eliminar Registros
    router.delete("/:id", function(req, res, next) {
        PController.Eliminar(req.params.id)
            .then((resp)=>{
                res.send(console.log(resp))
      })
    });
  


//Consultar equipos


module.exports = router;
  