var db=require('../dbconnection'); //reference of dbconnection.js
 
var ArtistRate={
 
getAllArtistRates:function(callback){
 
return db.query("Select * from rr_artist_rates",callback);
 
},
 getArtistRateById:function(id,callback){
 
return db.query("select * from rr_artist_rates where pk_artist_rate=?",[id],callback);
 },
 getAllArtistRatesByArtistId:function(id,callback){
 
return db.query("select * from rr_artist_rates where fk_artist=?",[id],callback);
 },
 addArtistRate:function(ArtistRate,callback){
 return db.query("Insert into rr_artist_rates(fk_artist,fk_user,rate_comment,rate_value,rate_date,rate_status) values(?,?,?,?,?,?)",[ArtistRate.fk_artist,ArtistRate.fk_user,ArtistRate.rate_comment,ArtistRate.rate_value,ArtistRate.rate_date,ArtistRate.rate_status],callback);
 },
 deleteArtistRate:function(id,callback){
  return db.query("delete from rr_artist_rates where pk_artist_rate=?",[id],callback);
 },
 updateArtistRate:function(id,ArtistRate,callback){
  return db.query("update rr_artist_rates set fk_artist=?,fk_user=?,rate_comment=?,rate_value=?,rate_date=?,rate_status=? where pk_artist_rate=?",[ArtistRate.fk_artist,ArtistRate.fk_user,ArtistRate.rate_comment,ArtistRate.rate_value,ArtistRate.rate_date,ArtistRate.rate_status,id],callback);
 }
 
};
 module.exports=ArtistRate;