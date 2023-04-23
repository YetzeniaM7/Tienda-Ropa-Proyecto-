const connection = require ("./conexion");
//CLase
class tModelo {
    //Buscar registros
    Listar(){
        return new Promise ((resolve,reject)=>{
            connection.query('SELECT compra.Id_compra, compra.Fecha_compra, compra.Total_compra, cliente.Nombre_cliente , empleado.Nombre_empleado FROM compra, cliente , empleado ', function (error, results, fields){
                resolve(results)
            });
        });
    }

    //Buscar Registros por id
    Buscar(i){
        return new Promise((resolve,reject)=>{
            connection.query('SELECT * FROM COMPRAS WHERE ID = ?', [i], function (error, results, fields) {
                resolve(results)
            }); 
        });
    }
    //Insertar registros
    Crear(r){
        return new Promise ((resolve,reject)=>{
            var query = connection.query('INSERT INTO COMPRA SET ?', r, function (error, results, fields) {
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
var query = connection.query('UPDATE COMPRA SET  Fecha_compra = ?, Total_compra = ?, Id_cliente = ?, Id_empleado = ? WHERE Id_compra = "'+i+'"', [r.Fecha_compra, r.Total_compra, r.Id_cliente, r.Id_empleado], function (error, results, fields) { 
    if (error) throw error; 
                let resp="Actualizado"
                resolve(resp) 
            }); 
        });  
    }


    //Eliminar registros
    Eliminar(i){
        return new Promise((resolve,reject)=>{
            connection.query('DELETE FROM `compra` WHERE id_compra = "'+i+'"', function (error, results, fields) {
                if (error) throw error;
                let resp="Eliminado"
                resolve(resp)
            })
        })
    }

}

module.exports = new tModelo();