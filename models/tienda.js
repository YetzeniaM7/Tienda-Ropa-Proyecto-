const connection = require ("./conexion");
//CLase
class tModelo {
    //Buscar registros
    Listar(){
        return new Promise ((resolve,reject)=>{
            connection.query('SELECT * FROM `tienda`', function (error, results, fields){
                resolve(results)
            });
        });
    }

    //Buscar Registros por id
    Buscar(i){
        return new Promise((resolve,reject)=>{
            connection.query('SELECT * FROM TIENDA WHERE ID = ?', [i], function (error, results, fields) {
                resolve(results)
            }); 
        });
    }
    //Insertar registros
    Crear(r){
        return new Promise ((resolve,reject)=>{
            var query = connection.query('INSERT INTO TIENDA SET ?', r, function (error, results, fields) {
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
            var query = connection.query('UPDATE `tienda`  SET  Nombre_tienda = ?, Direccion_tienda = ?, Telefono_tienda = ?  WHERE Id_tienda = "'+i+'"', [r.Nombre_tienda, r.Direccion_tienda,r.Telefono_tienda, i], function (error, results, fields) {
                if (error) throw error;
                let resp="Actualizado"
                resolve(resp)
            });
        }); 
    }

    //Eliminar registros
    Eliminar(i){
        return new Promise((resolve,reject)=>{
            connection.query('DELETE FROM `tienda` WHERE id_tienda = "'+i+'"', function (error, results, fields) {
                if (error) throw error;
                let resp="Eliminado"
                resolve(resp)
            })
        })
    }

}

module.exports = new tModelo();