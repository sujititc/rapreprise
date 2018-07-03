var db=require('../dbconnection'); //reference of dbconnection.js
 
var Order={
 
getAllOrders:function(callback){
 
return db.query("Select * from rr_orders",callback);
 
},
 getOrderById:function(id,callback){
 
return db.query("select * from rr_orders where pk_order=?",[id],callback);
 },
 getAllOrdersByBookingId:function(id,callback){
 
return db.query("select * from rr_orders where fk_booking=?",[id],callback);
 },
 addOrder:function(Order,callback){
 return db.query("Insert into rr_orders(fk_booking,order_date,ref_number,amount,status) values(?,?,?,?,?)",[Order.fk_booking,Order.order_date,Order.ref_number,Order.amount,Order.status],callback);
 },
 deleteOrder:function(id,callback){
  return db.query("delete from rr_orders where pk_order=?",[id],callback);
 },
 updateOrder:function(id,Order,callback){
  return db.query("update rr_orders set fk_booking=?,order_date=?,ref_number=?,amount=?,status=? where pk_order=?",[Order.fk_booking,Order.order_date,Order.ref_number,Order.amount,Order.status,id],callback);
 }
 
};
 module.exports=Order;