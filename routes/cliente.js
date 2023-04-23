var express = require('express');
var router = express.Router();
var clientecontroller = require("../controllers/cliente.c");
var validarToken = require('../authorization/validation')
var jwt = require('jsonwebtoken');

       
router.get('/', function(req, res, next) {
    clientecontroller.Listar()
    .then((resp)=>{   
        res.render('cliente', {resp: resp});
    })  
});


        router.get("/:id", function(req, res, next) {
            clientecontroller.Buscar(req.params.id)
            .then((resp)=>{
                res.render('cliente', {resp: resp});
                res.send(console.log(resp))
                })
        });

        //Insertar registros **
    router.post('/', function(req, res, next) {
        clientecontroller.Agregar(req.body)
        .then((resp)=>{
            res.send(console.log(resp))
     })
    });
    //Actualizar Registros
    router.patch("/:id", function(req, res, next) {
        clientecontroller.Actualizar(req.params.id , req.body)
        .then((resp)=>{
            res.send(console.log(resp))
     })
    });
    //Eliminar Registros
    router.delete("/:id", function(req, res, next) {
        clientecontroller.Eliminar(req.params.id)
            .then((resp)=>{
                res.send(console.log(resp))
      })
    });



module.exports = router;
  