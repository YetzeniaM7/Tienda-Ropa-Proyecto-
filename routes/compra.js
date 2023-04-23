var express = require('express');
var router = express.Router();
var tController = require("../controllers/compra");
var validarToken = require('../authorization/validation')
var jwt = require('jsonwebtoken');

       


router.get('/', function(req, res, next) {
    tController.Listar()
    .then((resp)=>{   
        res.render('COMPRA', {resp: resp});
    })  
});


//Consultar equipos por id
        router.get("/:id", function(req, res, next) {
            tController.Buscar(req.params.id)
            .then((resp)=>{
                res.render('COMPRA', {resp: resp});
                res.send(console.log(resp))
                })
        });

        //Insertar registros **
    router.post('/', function(req, res, next) {
        tController.Crear(req.body)
        .then((resp)=>{
            res.send(console.log(resp))
     })
    });
    //Actualizar Registros
    router.patch("/:id", function(req, res, next) {
        tController.Actualizar(req.params.id , req.body)
        .then((resp)=>{
            res.send(console.log(resp))
     })
    });
    //Eliminar Registros
    router.delete("/:id", function(req, res, next) {
        tController.Eliminar(req.params.id)
            .then((resp)=>{
                res.send(console.log(resp))
      })
    });
  


//Consultar equipos


module.exports = router;
