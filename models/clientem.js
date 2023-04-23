const connection = require('./conexion');

class clientemodel {
    Listar(){
        return new Promise((resolve, reject)=>{
            connection.query('SELECT * FROM `cliente`', function(error, results, fields){
                resolve(results);            
            })
        })
    }
    Buscar(id){
        return new Promise((resolve, reject)=>{
            connection.query('SELECT * FROM `cliente` WHERE `ID` = ? ', [id], function(error,results,fields){
                resolve(results)
            })
        })
    }
    Agregar(ns){
        return new Promise((resolve, reject)=>{
            let query = connection.query('INSERT INTO cliente SET ?', ns, function(error,results, fields){
                if(error)throw error;
            })
            var resp = "Se ha añadido un nuevo cliente!"
            resolve(resp);
        })
    }
    //Actualizar-Editar
    Actualizar(id, ns){
        return new Promise ((resolve, reject)=>{
            var query = connection.query('UPDATE `cliente` SET  Nombre_cliente= ?,Apellido_cliente= ?,Direccion_cliente= ?,Telefono_cliente= ?, Correo_cliente = ? WHERE Id_cliente = ? ', [ ns.Nombre_cliente, ns.Apellido_cliente, ns.Direccion_cliente, ns.Telefono_cliente, ns.Correo_cliente, id] , function (error, results, fields) {
                if (error) throw error;

                let resp = "Los datos del cliente fueron Actualizado Correctamente"
                resolve(resp);
              });
        })
    }
    Eliminar(id){
        return new Promise((resolve, reject)=>{
            connection.query('DELETE FROM cliente WHERE Id_cliente = "'+id+'"', function(error,results,fields){
                if(error) throw error;
                let resp = "Los datos del cliente fueron eliminado correctamente" 
                resolve(resp);
            })
        })
    }
}

module.exports = new clientemodel();