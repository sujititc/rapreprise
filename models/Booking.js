var db=require('../dbconnection'); //reference of dbconnection.js
 
var Booking={
 
getAllBookings:function(callback){
 
return db.query("Select * from rr_bookings",callback);
 
},
 getBookingById:function(id,callback){
 
return db.query("select * from rr_bookings where pk_booking=?",[id],callback);
 },
 getAllBookingsByUserId:function(id,callback){
 
return db.query("select * from rr_bookings where fk_user=?",[id],callback);
 },
 addBooking:function(Booking,callback){
 return db.query("Insert into rr_bookings(fk_user,fk_studio_plan,booking_date,booking_status) values(?,?,?,?)",[Booking.fk_user,Booking.fk_studio_plan,Booking.booking_date,Booking.booking_status],callback);
 },
 deleteBooking:function(id,callback){
  return db.query("delete from rr_bookings where pk_booking=?",[id],callback);
 },
 updateBooking:function(id,Booking,callback){
  return db.query("update rr_bookings set fk_user=?,fk_studio_plan=?,booking_date=?,booking_status=? where pk_booking=?",[Booking.fk_user,Booking.fk_studio_plan,Booking.booking_date,Booking.booking_status,id],callback);
 }
 
};
 module.exports=Booking;