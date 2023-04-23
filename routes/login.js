const connection = require ("../models/conexion");
const bcrypt = require('bcrypt');
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');


router.get('/', function(req, res, next) { 
      res.render('LOGIN');
});






/* POST home page. */
router.post('/', function(req, res, next) {
    connection.query('SELECT password FROM  `users` WHERE username = "'+req.body.username+'"', 
    function (error, results, fields) {
      if (error) throw error;
      var hash = results[0].password
      bcrypt.compare(req.body.password, hash, function(err, result) {
          if (result) {
            jwt.sign ({ roles: ["Admin"], usuario : req.body.username }, process.env.secreto, {},
            function(err, token) {
              if (err) {
                console.log(err);
                res.send('Error al generar token');
              } else {
                console.log('Usuario y contrasena correctos' + token);
               // localStorage.setItem('token', token); // Almacenar token en Local Storage
               res.render('index');
               // res.send('Usuario y contrasena correctos');
               //res.json({ token });
              }     
            } )
          }
        // result == true
    });

    });

});

router.post('/registro', function(req, res, next) {
    console.log(req.body)
    var saltRounds = 5
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        connection.query('INSERT INTO `users`(`username`, `password`, `name`,`email`,`address`,`phone`) VALUES ("'+req.body.username+'","'+hash+'","'+req.body.name+'","'+req.body.email+'","'+req.body.address+'","'+req.body.phone+'")', function (error, results, fields) {
            if (error) throw error;
            jwt.sign ({ usuario : req.body.username, roles: ["Admin"] }, 'backend', {}, function(err, token) {
              console.log (token);
              console.log (err);
              console.log ('Callback de login');
              res.send(token);
          } )
          });
    });

  
 
});



module.exports = router;
