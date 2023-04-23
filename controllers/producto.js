const ProductModel = require('../models/producto');

class ProductController {
    Listar(){
        return new Promise ( (resolve, reject) =>{
            ProductModel.Listar()
            .then((resp)=>{
                resolve(resp)
            })
        });
    }
    Buscar(id){
        return new Promise ((resolve, reject)=>{
            ProductModel.Buscar(id)
            .then((resp)=>{
                resolve(resp)
            });
        })
    }
    Agregar(ns){
        return new Promise ((resolve, reject)=>{
            ProductModel.Agregar(ns)
            .then((resp)=>{
                resolve(resp)
            });
        })
    }
    Actualizar(id, ns){
        return new Promise ((resolve, reject)=>{
            ProductModel.Actualizar(id, ns)
            .then((resp)=>{
                resolve(resp)
            })
        })    
    }
    Eliminar(id){
        return new Promise((resolve,reject)=>{
            ProductModel.Eliminar(id)
            .then((resp)=>{
                resolve(resp);
            })
        })
    }
}

module.exports = new ProductController();