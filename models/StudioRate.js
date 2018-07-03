var db=require('../dbconnection'); //reference of dbconnection.js
 
var StudioRate={
 
getAllStudioRates:function(callback){
 
return db.query("Select * from rr_studio_rates",callback);
 
},
 getStudioRateById:function(id,callback){
 
return db.query("select * from rr_studio_rates where pk_studio_rate=?",[id],callback);
 },
 getAllStudioRatesByStudioId:function(id,callback){
 
return db.query("select * from rr_studio_rates where fk_studio=?",[id],callback);
 },
 addStudioRate:function(StudioRate,callback){
 return db.query("Insert into rr_studio_rates(fk_studio,fk_user,rate_comment,rate_value,rate_date,rate_status) values(?,?,?,?,?,?)",[StudioRate.fk_studio,StudioRate.fk_user,StudioRate.rate_comment,StudioRate.rate_value,StudioRate.rate_date,StudioRate.rate_status],callback);
 },
 deleteStudioRate:function(id,callback){
  return db.query("delete from rr_studio_rates where pk_studio_rate=?",[id],callback);
 },
 updateStudioRate:function(id,StudioRate,callback){
  return db.query("update rr_studio_rates set fk_studio=?,fk_user=?,rate_comment=?,rate_value=?,rate_date=?,rate_status=? where pk_studio_rate=?",[StudioRate.fk_studio,StudioRate.fk_user,StudioRate.rate_comment,StudioRate.rate_value,StudioRate.rate_date,StudioRate.rate_status,id],callback);
 }
 
};
 module.exports=StudioRate;