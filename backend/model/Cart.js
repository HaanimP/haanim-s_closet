import {connection as db} from "../config/index.js"
class Cart{
       fetchCart(req,res){
       const qry = `
       select cartID userID prodID quantity
       from cart;`
        db.query(qry, (err, results)=>{
           if(err) throw err
           res.json({
               status : res.statusCode,
               results
           })
        })
   }
   fetchCart(req,res){
       const qry = `
       select cartID userID prodID quantity
       from cart WHERE prodID=${req.params.id};`
        db.query(qry, (err, result)=>{
           if(err) throw err
           res.json({
               status : res.statusCode,
               result : result[0]
           })
        })
   }
   deleteCart(req,res){
     const qry=`DELETE FROM cart ;`

     db.query(qry, (err)=>{
       if(err) throw err
       
       res.json({
         status: res.statusCode,
         msg:'Product was deleted from cart!'
       })

     })
 }
deleteCart(req, res) {
 const qry = `DELETE FROM products WHERE prodID=${db.escape(req.params.id)};`;

 db.query(qry, (err) => {
   if (err) {
     throw err;
   } else {
     res.json({
       status: res.statusCode,
       msg: 'Product is deleted from cart!',
     });
   }
 });
}



}
export{
   Cart
}