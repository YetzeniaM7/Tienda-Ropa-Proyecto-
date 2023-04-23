const connection = require ("../models/conexion");
var express = require('express');
var router = express.Router();
var validarToken = require('../authorization/validation')
var jwt = require('jsonwebtoken');

/* GET users listing. */
router.get('/', validarToken, function(req, res, next) {
  var payload = jwt.decode(req.headers.authorization.replace('Bearer ', ''))
  if (payload.roles.includes("Admin")) {
    console.log('Paso a usuarios...')

    connection.query('SELECT * FROM  `users`', 
    function (error, results, fields) {
      if (error) throw error;
     // res.send(results)
      console.log("Ingresamos");
      res.render('users', {resp: results});
    });
  } else {
    res.send("¡Solo el admin esta autorizado!")
  }
});

module.exports = router;
