const ProveModel = require('../models/proveedor');

class ProveController{
    Listar(){
        return new Promise ( (resolve, reject) =>{
            ProveModel.Listar()
            .then((resp)=>{
                resolve(resp)
            })
        });
    }
    Buscar(id){
        return new Promise ((resolve, reject)=>{
            ProveModel.Buscar(id)
            .then((resp)=>{
                resolve(resp)
            });
        })
    }
    Agregar(ns){
        return new Promise ((resolve, reject)=>{
            ProveModel.Agregar(ns)
            .then((resp)=>{
                resolve(resp)
            });
        })
    }
    Actualizar(id, ns){
        return new Promise ((resolve, reject)=>{
            ProveModel.Actualizar(id, ns)
            .then((resp)=>{
                resolve(resp)
            })
        })    
    }
    Eliminar(id){
        return new Promise((resolve,reject)=>{
            ProveModel.Eliminar(id)
            .then((resp)=>{
                resolve(resp);
            })
        })
    }
}

module.exports = new ProveController();