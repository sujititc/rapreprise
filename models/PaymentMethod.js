var db=require('../dbconnection'); //reference of dbconnection.js
 
var PaymentMethod={
 
getAllPaymentMethods:function(callback){
 
return db.query("Select * from rr_payment_methods",callback);
 
},
 getPaymentMethodById:function(id,callback){
 
return db.query("select * from rr_payment_methods where pk_payment_method=?",[id],callback);
 },
 getAllPaymentMethodsByUserId:function(id,callback){
 
return db.query("select * from rr_payment_methods where fk_user=?",[id],callback);
 },
 addPaymentMethod:function(PaymentMethod,callback){
 return db.query("Insert into rr_payment_methods(fk_user,cardholder,card_type,card_number,email,exp_month,exp_year,status) values(?,?,?,?,?,?,?,?)",[PaymentMethod.fk_user,PaymentMethod.cardholder,PaymentMethod.card_type,PaymentMethod.card_number,PaymentMethod.email,PaymentMethod.exp_month,PaymentMethod.exp_year,PaymentMethod.status],callback);
 },
 deletePaymentMethod:function(id,callback){
  return db.query("delete from rr_payment_methods where pk_payment_method=?",[id],callback);
 },
 updatePaymentMethod:function(id,PaymentMethod,callback){
  return db.query("update rr_payment_methods set fk_user=?,cardholder=?,card_type=?,card_number=?,email=?,exp_month=?,exp_year=?,status=? where pk_payment_method=?",[PaymentMethod.fk_user,PaymentMethod.cardholder,PaymentMethod.card_type,PaymentMethod.card_number,PaymentMethod.email,PaymentMethod.exp_month,PaymentMethod.exp_year,PaymentMethod.status,id],callback);
 }
 
};
 module.exports=PaymentMethod;