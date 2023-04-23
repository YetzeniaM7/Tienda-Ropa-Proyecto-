var PModelo = require('../models/Pedido')

class PController {
  
    Listar(){
        return new Promise ((resolve, reject) => {
            PModelo.Listar()
            .then((res)=>{
                resolve(res)
            });
        })
    }

    Buscar(i){
        return new Promise ((resolve, reject) => {
            PModelo.Buscar(i)
            .then((resp)=>{
                resolve(resp)
            });
        })
    } 

    Crear(r){
        return new Promise ((resolve, reject) => {
            PModelo.Crear(r)
            .then((resp)=>{
                resolve(resp)
            });
        })
    }
    
    Actualizar(i,r){
        return new Promise ((resolve, reject) => {
            PModelo.Actualizar(i,r)
            .then((resp)=>{
                resolve(resp)
            });
        })
    }
    Eliminar(i){
        return new Promise ((resolve, reject) => {
            PModelo.Eliminar(i)
            .then((resp)=>{
                resolve(resp)
            });
        })
    } 
}


module.exports = new PController();