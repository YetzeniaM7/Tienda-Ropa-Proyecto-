var jwt = require('jsonwebtoken');


function validarToken(req, res, next ) {
    console.log('Entramos a validar token')
    if (!req.headers.authorization) {
        res.send("No coincide")
    }
    console.log(req.headers.authorization)
    var token = req.headers.authorization.replace('Bearer ', '')
    console.log(token)
    try {
        var decoded = jwt.verify(token, 'backend');
        next();
    } catch (error) {
        res.send('El token no coincides')
    }
    // console.log(decoded.foo) // bar
}

module.exports = validarToken;