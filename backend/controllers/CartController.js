import express from 'express'
import bodyParser from 'body-parser'
import { cart } from '../model/index.js'

const cartRouter=express.Router()

//fetch all products
cartRouter.get('/',(req,res)=>{
    try{
        cart.fetchCart(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to retrieve a product'
        })
    }

})
cartRouter.get('/:id',(req,res)=>{
    try{
        cart.fetchCart(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to retrieve a product'
        })
    }

})
cartRouter.delete('/deleteCart',(req,res)=>{
    try{
        cart.deleteCart(req,res)

    }catch(e){

        res.json({
            status:res.statusCode,
            msg:'failed to delete a product',
            // results:products.fetchProducts(req,res)
        })
    }
})

cartRouter.delete('/delete/:id',(req,res)=>{
    try{
        cart.deleteCart(req,res)

    }catch(e){

        res.json({
            status:res.statusCode,
            msg:'failed to delete a user',
        })
    }
})

export{
    cartRouter
}