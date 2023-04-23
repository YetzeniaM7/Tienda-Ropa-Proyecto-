var express = require('express');
var router = express.Router();
var empleadocontroller = require("../controllers/empleado");
var validarToken = require('../authorization/validation')
var jwt = require('jsonwebtoken');

       
router.get('/', function(req, res, next) {
    empleadocontroller.Listar()
    .then((resp)=>{   
        res.render('empleado', {resp: resp});
    })  
});


        router.get("/:id", function(req, res, next) {
            empleadocontroller.Buscar(req.params.id)
            .then((resp)=>{
                res.render('empleado', {resp: resp});
                res.send(console.log(resp))
                })
        });

        //Insertar registros **
    router.post('/', function(req, res, next) {
        empleadocontroller.Agregar(req.body)
        .then((resp)=>{
            res.send(console.log(resp))
     })
    });
    //Actualizar Registros
    router.patch("/:id", function(req, res, next) {
        empleadocontroller.Actualizar(req.params.id , req.body)
        .then((resp)=>{
            res.send(console.log(resp))
     })
    });
    //Eliminar Registros
    router.delete("/:id", function(req, res, next) {
        empleadocontroller.Eliminar(req.params.id)
            .then((resp)=>{
                res.send(console.log(resp))
      })
    });



module.exports = router;