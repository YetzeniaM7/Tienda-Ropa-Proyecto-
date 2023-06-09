var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ventasRouter = require('./routes/ventas');
var loginRouter = require('./routes/login');
var compraRouter = require('./routes/compra');
var clienteRouter = require('./routes/cliente');
var empleadoRouter = require('./routes/empleado');
var productoRouter = require('./routes/producto');
var proveedorRouter = require('./routes/proveedor');
var PedidoRouter = require('./routes/Pedido');
var tiendaRouter = require('./routes/tienda');
var loginpersonalRouter = require('./routes/loginpersonal');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/ventas', ventasRouter);
app.use('/login', loginRouter);
app.use('/compra', compraRouter);
app.use('/cliente', clienteRouter);
app.use('/empleado', empleadoRouter);
app.use('/producto', empleadoRouter);
app.use('/proveedor', proveedorRouter);
app.use('/tienda', tiendaRouter);
app.use('/Pedidos', PedidoRouter);
app.use('/loginpersonal', loginpersonalRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
