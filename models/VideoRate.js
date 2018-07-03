var db=require('../dbconnection'); //reference of dbconnection.js
 
var VideoRate={
 
getAllVideoRates:function(callback){
 
return db.query("Select * from rr_video_rates",callback);
 
},
 getVideoRateById:function(id,callback){
 
return db.query("select * from rr_video_rates where pk_video_rate=?",[id],callback);
 },
 getAllVideoRatesByVideoId:function(id,callback){
 
return db.query("select * from rr_video_rates where fk_video=?",[id],callback);
 },
 addVideoRate:function(VideoRate,callback){
 return db.query("Insert into rr_video_rates(fk_video,fk_user,rate_comment,rate_value,rate_date,rate_status) values(?,?,?,?,?,?)",[VideoRate.fk_video,VideoRate.fk_user,VideoRate.rate_comment,VideoRate.rate_value,VideoRate.rate_date,VideoRate.rate_status],callback);
 },
 deleteVideoRate:function(id,callback){
  return db.query("delete from rr_video_rates where pk_video_rate=?",[id],callback);
 },
 updateVideoRate:function(id,VideoRate,callback){
  return db.query("update rr_video_rates set fk_video=?,fk_user=?,rate_comment=?,rate_value=?,rate_date=?,rate_status=? where pk_video_rate=?",[VideoRate.fk_video,VideoRate.fk_user,VideoRate.rate_comment,VideoRate.rate_value,VideoRate.rate_date,VideoRate.rate_status,id],callback);
 }
 
};
 module.exports=VideoRate;