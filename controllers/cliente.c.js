const clientemodel = require('../models/clientem');

class clientecontroller {
    Listar(){
        return new Promise ( (resolve, reject) =>{
            clientemodel.Listar()
            .then((resp)=>{
                resolve(resp)
            })
        });
    }
    Buscar(id){
        return new Promise ((resolve, reject)=>{
            clientemodel.Buscar(id)
            .then((resp)=>{
                resolve(resp)
            });
        })
    }
    Agregar(ns){
        return new Promise ((resolve, reject)=>{
            clientemodel.Agregar(ns)
            .then((resp)=>{
                resolve(resp)
            });
        })
    }
    Actualizar(id, ns){
        return new Promise ((resolve, reject)=>{
            clientemodel.Actualizar(id, ns)
            .then((resp)=>{
                resolve(resp)
            })
        })    
    }
    Eliminar(id){
        return new Promise((resolve,reject)=>{
            clientemodel.Eliminar(id)
            .then((resp)=>{
                resolve(resp);
            })
        })
    }
}

module.exports = new clientecontroller();