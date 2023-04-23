const connection = require('./conexion');

class Provemodel{
    Listar(){
        return new Promise((resolve, reject)=>{
            connection.query('SELECT * FROM proveedor', function(error, results, fields){
                resolve(results);
            })
        })
    }
    Buscar(id){
        return new Promise((resolve, reject)=>{
            connection.query('SELECT * FROM `proveedor` WHERE ID = ?', [id], function(error, results, fields){
                resolve(results);
            })
        })
    }
    Agregar(ns){
        return new Promise((resolve, reject)=>{
            var query = connection.query('INSERT INTO proveedor SET ?', ns, function(error, results, fields){
                if(error) throw error;
            })
            var resp = "Proveedor registrado de manera exitosa"
            resolve(resp);
        })
    }
    Actualizar(id, ns){
        return new Promise ((resolve, reject)=>{
            let query = connection.query('UPDATE `proveedor` SET Nombre_proveedor = ?, Direccion_proveedor = ?, Telefono_proveedor = ?, Correo_proveedor = ? WHERE Id_proveedor = ? ',[ns.Nombre_proveedor, ns.Direccion_proveedor, ns.Telefono_proveedor, ns.Correo_proveedor, id], function(error, results, fields){
                if(error) throw error;

                let resp = 'Información del proveedor actualizado correctamente'
                resolve(resp);
            })
        })
    }

    Eliminar(id){
        return new Promise((resolve, reject)=>{
            connection.query('DELETE FROM proveedor WHERE Id_proveedor = "'+id+'"', function(error, results, fields){
                if(error) throw error;
                var resp = 'Proveedor eliminado del sistema'
                resolve(resp)
            })
        })

    }
}


module.exports = new Provemodel();