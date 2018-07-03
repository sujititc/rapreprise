var db=require('../dbconnection'); //reference of dbconnection.js
 
var SongRate={
 
getAllSongRates:function(callback){
 
return db.query("Select * from rr_song_rates",callback);
 
},
 getSongRateById:function(id,callback){
 
return db.query("select * from rr_song_rates where pk_song_rate=?",[id],callback);
 },
 getAllSongRatesBySongId:function(id,callback){
 
return db.query("select * from rr_song_rates where fk_song=?",[id],callback);
 },
 addSongRate:function(SongRate,callback){
 return db.query("Insert into rr_song_rates(fk_song,fk_user,rate_comment,rate_value,rate_date,rate_status) values(?,?,?,?,?,?)",[SongRate.fk_song,SongRate.fk_user,SongRate.rate_comment,SongRate.rate_value,SongRate.rate_date,SongRate.rate_status],callback);
 },
 deleteSongRate:function(id,callback){
  return db.query("delete from rr_song_rates where pk_song_rate=?",[id],callback);
 },
 updateSongRate:function(id,SongRate,callback){
  return db.query("update rr_song_rates set fk_song=?,fk_user=?,rate_comment=?,rate_value=?,rate_date=?,rate_status=? where pk_song_rate=?",[SongRate.fk_song,SongRate.fk_user,SongRate.rate_comment,SongRate.rate_value,SongRate.rate_date,SongRate.rate_status,id],callback);
 }
 
};
 module.exports=SongRate;