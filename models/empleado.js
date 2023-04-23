const connection = require('./conexion');

class empleadomodel {
    Listar(){
        return new Promise((resolve, reject)=>{
            connection.query('SELECT * FROM `empleado`', function(error, results, fields){
                resolve(results);            
            })
        })
    }
    Buscar(id){
        return new Promise((resolve, reject)=>{
            connection.query('SELECT * FROM `empleado` WHERE `ID` = ? ', [id], function(error,results,fields){
                resolve(results)
            })
        })
    }
    Agregar(ns){
        return new Promise((resolve, reject)=>{
            let query = connection.query('INSERT INTO empleado SET ?', ns, function(error,results, fields){
                if(error)throw error;
            })
            var resp = "Se ha añadido un nuevo empleado!"
            resolve(resp);
        })
    }
    //Actualizar-Editar
    Actualizar(id, ns){
        return new Promise ((resolve, reject)=>{
            var query = connection.query('UPDATE `empleado` SET  Nombre_empleado= ?,Apellido_empleado= ?,Direccion_empleado= ?,Telefono_empleado= ?, Correo_empleado = ?, Fecha_contratacion = ? WHERE Id_empleado = ? ', [ ns.Nombre_empleado, ns.Apellido_empleado, ns.Direccion_empleado, ns.Telefono_empleado, ns.Correo_empleado, ns.Fecha_contratacion, id] , function (error, results, fields) {
                if (error) throw error;

                let resp = "Los datos del empleado fueron Actualizado Correctamente"
                resolve(resp);
              });
        })
    }
    Eliminar(id){
        return new Promise((resolve, reject)=>{
            connection.query('DELETE FROM empleado WHERE empleado = "'+id+'"', function(error,results,fields){
                if(error) throw error;
                let resp = "Los datos del empleado fueron eliminado correctamente" 
                resolve(resp);
            })
        })
    }
}

module.exports = new empleadomodel();