const empleadomodel = require('../models/empleado');

class empleadocontroller {
    Listar(){
        return new Promise ( (resolve, reject) =>{
            empleadomodel.Listar()
            .then((resp)=>{
                resolve(resp)
            })
        });
    }
    Buscar(id){
        return new Promise ((resolve, reject)=>{
            empleadomodel.Buscar(id)
            .then((resp)=>{
                resolve(resp)
            });
        })
    }
    Agregar(ns){
        return new Promise ((resolve, reject)=>{
            empleadomodel.Agregar(ns)
            .then((resp)=>{
                resolve(resp)
            });
        })
    }
    Actualizar(id, ns){
        return new Promise ((resolve, reject)=>{
            empleadomodel.Actualizar(id, ns)
            .then((resp)=>{
                resolve(resp)
            })
        })    
    }
    Eliminar(id){
        return new Promise((resolve,reject)=>{
            empleadomodel.Eliminar(id)
            .then((resp)=>{
                resolve(resp);
            })
        })
    }
}

module.exports = new empleadocontroller();