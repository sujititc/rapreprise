var db=require('../dbconnection'); //reference of dbconnection.js
 
var AlbumRate={
 
getAllAlbumRates:function(callback){
 
return db.query("Select * from rr_album_rates",callback);
 
},
 getAlbumRateById:function(id,callback){
 
return db.query("select * from rr_album_rates where pk_album_rate=?",[id],callback);
 },
 getAllAlbumRatesByAlbumId:function(id,callback){
 
return db.query("select * from rr_album_rates where fk_album=?",[id],callback);
 },
 addAlbumRate:function(AlbumRate,callback){
 return db.query("Insert into rr_album_rates(fk_album,fk_user,rate_comment,rate_value,rate_date,rate_status) values(?,?,?,?,?,?)",[AlbumRate.fk_album,AlbumRate.fk_user,AlbumRate.rate_comment,AlbumRate.rate_value,AlbumRate.rate_date,AlbumRate.rate_status],callback);
 },
 deleteAlbumRate:function(id,callback){
  return db.query("delete from rr_album_rates where pk_album_rate=?",[id],callback);
 },
 updateAlbumRate:function(id,AlbumRate,callback){
  return db.query("update rr_album_rates set fk_album=?,fk_user=?,rate_comment=?,rate_value=?,rate_date=?,rate_status=? where pk_album_rate=?",[AlbumRate.fk_album,AlbumRate.fk_user,AlbumRate.rate_comment,AlbumRate.rate_value,AlbumRate.rate_date,AlbumRate.rate_status,id],callback);
 }
 
};
 module.exports=AlbumRate;