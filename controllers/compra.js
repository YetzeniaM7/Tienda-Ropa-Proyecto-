var tModelo = require('../models/compra')

class tController {
  
    Listar(){
        return new Promise ((resolve, reject) => {
            tModelo.Listar()
            .then((res)=>{
                resolve(res)
            });
        })
    }

    Buscar(i){
        return new Promise ((resolve, reject) => {
            tModelo.Buscar(i)
            .then((resp)=>{
                resolve(resp)
            });
        })
    } 

    Crear(r){
        return new Promise ((resolve, reject) => {
            tModelo.Crear(r)
            .then((resp)=>{
                resolve(resp)
            });
        })
    }
    
    Actualizar(i,r){
        return new Promise ((resolve, reject) => {
            tModelo.Actualizar(i,r)
            .then((resp)=>{
                resolve(resp)
            });
        })
    }
    Eliminar(i){
        return new Promise ((resolve, reject) => {
            tModelo.Eliminar(i)
            .then((resp)=>{
                resolve(resp)
            });
        })
    } 
}


module.exports = new tController();