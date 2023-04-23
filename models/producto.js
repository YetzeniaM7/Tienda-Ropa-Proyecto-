const connection = require('./conexion');

class Productmodel    {
    Listar(){
        return new Promise((resolve, reject)=>{
            connection.query('SELECT * FROM `producto`', function(error, results, fields){
                resolve(results);
            })
        })
    }
    Buscar(id){
        return new Promise((resolve, reject)=>{
            connection.query('SELECT * FROM `producto` WHERE Id_producto = ?', [id], function(error, results, fields){
                resolve(results);
            })
        })
    }
    Agregar(ns){
        return new Promise((resolve, reject)=>{
            var query = connection.query('INSERT INTO `producto` SET ?', ns, function(error, results, fields){
                if(error) throw error;
            })
            let resp = "Producto registrado de manera exitosa"
            resolve(resp);
        })
    }
    Actualizar(id, ns){
        return new Promise ((resolve, reject)=>{
            let query = connection.query('UPDATE `producto` SET Nombre_producto = ?, Marca_producto = ?, Precio_producto = ?, Cantidad_producto = ? WHERE Id_producto = ? ',[ns.Nombre_producto, ns.Marca_producto, ns.Precio_producto, ns.Cantidad_producto, id], function(error, results, fields){
                if(error) throw error;

                var resp = 'Información del producto actualizado correctamente'
                resolve(resp);
            })
        })
    }

    Eliminar(id){
        return new Promise((resolve, reject)=>{
            connection.query('DELETE FROM `producto` WHERE Id_producto = "'+id+'"', function(error, results, fields){
                if(error) throw error;
                var resp = 'Producto eliminado del sistema'
                resolve(resp)
            })
        })

    }
}


module.exports = new Productmodel();