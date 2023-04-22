const connection = require ("./conexion");
//CLase
class tModelo {
    //Buscar registros
    Listar(){
        return new Promise ((resolve,reject)=>{
            connection.query('SELECT venta.Fecha_venta, venta.Total_venta, cliente.Nombre_cliente , empleado.Nombre_empleado FROM venta, cliente , empleado ', function (error, results, fields){
                resolve(results)
            });
        });
    }

    //Buscar Registros por id
    Buscar(i){
        return new Promise((resolve,reject)=>{
            connection.query('SELECT * FROM VENTAS WHERE ID = ?', [i], function (error, results, fields) {
                resolve(results)
            }); 
        });
    }
    //Insertar registros
    Crear(r){
        return new Promise ((resolve,reject)=>{
            var query = connection.query('INSERT INTO VENTA SET ?', r, function (error, results, fields) {
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
            var query = connection.query('UPDATE VENTA SET  FECHA_VENTA = ?, TOTAL_VENTA = ?, ID_CLIENTE = ?, ID_EMPLEADO = ?', [r.FECHA_VENTA, r.Total_venta,r.Id_cliente , r.Id_empleado, i], function (error, results, fields) {
                if (error) throw error;
                let resp="Actualizado"
                resolve(resp)
            });
        }); 
    }

    //Eliminar registros
    Eliminar(i){
        return new Promise((resolve,reject)=>{
            connection.query('DELETE FROM `venta` WHERE id_venta = "'+i+'"', function (error, results, fields) {
                if (error) throw error;
                let resp="Eliminado"
                resolve(resp)
            })
        })
    }

}

module.exports = new tModelo();