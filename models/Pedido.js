const connection = require ("./conexion");
//CLase
class PModelo {
    //Buscar registros
    Listar(){
        return new Promise ((resolve,reject)=>{
            connection.query('SELECT Id_pedido , Fecha_pedido , Cantidad_pedido , Id_proveedor , Id_producto  FROM pedido ', function (error, results, fields){
                resolve(results)
            });
        });
    }

    //Buscar Registros por id
    Buscar(i){
        return new Promise((resolve,reject)=>{
            connection.query('SELECT * FROM Pedido WHERE ID = ?', [i], function (error, results, fields) {
                resolve(results)
            }); 
        });
    }
    //Insertar registros
    Crear(r){
        return new Promise ((resolve,reject)=>{
            var query = connection.query('INSERT INTO Pedido SET ?', r, function (error, results, fields) {
                if (error) throw error;
                // Neat!
                let resp="Agregado"
                resolve(resp)
            });
        }); 
    }
 
    //Actualizar registros
    Actualizar(i,r){
        return new Promise ((resolve,reject)=>{           
            var query = connection.query('UPDATE Pedido SET Fecha_pedido = ?, Cantidad_pedido = ?, Id_proveedor = ?, Id_producto = ?', [r.Fecha_pedido, r.Cantidad_pedido , r.Id_proveedor , r.Id_producto,  i], function (error, results, fields) {
                if (error) throw error;
                let resp="Actualizado"
                resolve(resp)
            });
        }); 
    }

    //Eliminar registros
    Eliminar(i){
        return new Promise((resolve,reject)=>{
            connection.query('DELETE FROM `pedido` WHERE id_pedido = "'+i+'"', function (error, results, fields) {
                if (error) throw error;
                let resp="Eliminado"
                resolve(resp)
            })
        })
    }

}

module.exports = new PModelo();