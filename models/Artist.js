var db=require('../dbconnection'); //reference of dbconnection.js
 
var Artist={
 
getAllArtists:function(callback){
 
	return db.query("Select * from rr_artists where artist_status=1",callback);
 
},
 getFeaturedArtist:function(callback){
 	return db.query("Select * from rr_artists where artist_status=0",callback);
 },
 getArtistById:function(id,callback){
 
return db.query("select * from rr_artists where pk_artist=?",[id],callback);
 },
 addArtist:function(Artist,callback){
 return db.query("Insert into rr_artists(artist_name,artist_bio,artist_photo,artist_cover,artist_sc_id,artist_status) values(?,?,?,?,?,?)",[Artist.artist_name,Artist.artist_bio,Artist.artist_photo,Artist.artist_cover,Artist.artist_sc_id,Artist.artist_status],callback);
 },
 deleteArtist:function(id,callback){
  return db.query("delete from rr_artists where pk_artist=?",[id],callback);
 },
 updateArtist:function(id,Artist,callback){
  return db.query("update rr_artists set artist_name=?,artist_bio=?,artist_photo=?,artist_cover=?,artist_sc_id=?,artist_status=? where pk_artist=?",[Artist.artist_name,Artist.artist_bio,Artist.artist_photo,Artist.artist_cover,Artist.artist_sc_id,Artist.artist_status,id],callback);
 }
 
};
 module.exports=Artist;