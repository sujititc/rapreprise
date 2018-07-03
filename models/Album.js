var db=require('../dbconnection'); //reference of dbconnection.js

var fields = "pk_album, album_cover, album_name, album_photo, album_sc_id, album_status, album_year,";
var json_fields = "JSON_OBJECT('pk_artist',b.pk_artist,'artist_name',b.artist_name, 'artist_bio',b.artist_bio, 'artist_photo', b.artist_photo,'artist_cover', b.artist_cover,'artist_sc_id', b.artist_sc_id,'artist_status', b.artist_status) as artist";
 
var Album={
 
getAllAlbums:function(callback){
 
return db.query("Select " + fields + json_fields + " from rr_albums a inner join rr_artists b on a.fk_artist=b.pk_artist",callback);
 
},
 getAlbumById:function(id,callback){
 
return db.query("Select " + fields + json_fields + " from rr_albums a inner join rr_artists b on a.fk_artist=b.pk_artist where pk_album=?",[id],callback);
 },
 getAllAlbumsByArtistId:function(id,callback){
 
return db.query("Select " + fields + json_fields + " from rr_albums a inner join rr_artists b on a.fk_artist=b.pk_artist where fk_artist=?",[id],callback);
 },
 addAlbum:function(Album,callback){
 return db.query("Insert into rr_albums(fk_artist,album_name,album_year,album_cover,album_photo,album_sc_id,album_status) values(?,?,?,?,?,?)",[Album.fk_artist,Album.album_name,Album.album_year,Album.album_cover,Album.album_photo,Album.album_sc_id,Album.album_status],callback);
 },
 deleteAlbum:function(id,callback){
  return db.query("delete from rr_albums where pk_album=?",[id],callback);
 },
 updateAlbum:function(id,Album,callback){
  return db.query("update rr_albums set fk_artist,album_name=?,album_year=?,album_cover=?,album_photo=?,album_sc_id=?,album_status=? where pk_album=?",[Album.fk_artist,Album.album_name,Album.album_year,Album.album_cover,Album.album_photo,Album.album_sc_id,Album.album_status,id],callback);
 }
 
};
 module.exports=Album;