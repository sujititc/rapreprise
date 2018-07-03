var db=require('../dbconnection'); //reference of dbconnection.js
 
var album_subquery = "song_rating, (Select JSON_OBJECT('pk_album', c.pk_album, 'album_name', c.album_name, 'album_year', c.album_year, 'album_cover', c.album_cover, 'album_photo', c.album_photo) FROM rr_albums_songs d INNER JOIN rr_albums c ON c.pk_album=d.fk_album WHERE d.fk_song=a.pk_song LIMIT 1) as album, feat_cover, discover "

var Song={
 
getAllSongs:function(callback){
 
return db.query("Select pk_song, JSON_OBJECT('pk_artist',b.pk_artist,'artist_name',b.artist_name, 'artist_bio',b.artist_bio, 'artist_photo', b.artist_photo,'artist_cover', b.artist_cover,'artist_sc_id', b.artist_sc_id,'artist_status', b.artist_status) as artist, song_name,song_release,song_cover,song_photo,song_sc_stream_url,song_status, song_likes, song_shares, song_comments, song_listens, " + album_subquery + " from rr_songs as a inner join rr_artists b on a.fk_artist=b.pk_artist where song_status=1",callback);
 
},

getFeaturedSong(callback) {
	return db.query("Select pk_song, JSON_OBJECT('pk_artist',b.pk_artist,'artist_name',b.artist_name, 'artist_bio',b.artist_bio, 'artist_photo', b.artist_photo,'artist_cover', b.artist_cover,'artist_sc_id', b.artist_sc_id,'artist_status', b.artist_status) as artist, song_name,song_release,song_cover,song_photo,song_sc_stream_url,song_status, song_likes, song_shares, song_comments, song_listens, " + album_subquery + " from rr_songs as a inner join rr_artists b on a.fk_artist=b.pk_artist where song_status=0",callback);
},

 getSongById:function(id,callback){
 
return db.query("Select pk_song, JSON_OBJECT('pk_artist',b.pk_artist,'artist_name',b.artist_name, 'artist_bio',b.artist_bio, 'artist_photo', b.artist_photo,'artist_cover', b.artist_cover,'artist_sc_id', b.artist_sc_id,'artist_status', b.artist_status) as artist, song_name,song_release,song_cover,song_photo,song_sc_stream_url,song_status, song_likes, song_shares, song_comments, song_listens, " + album_subquery + "  from rr_songs as a inner join rr_artists b on a.fk_artist=b.pk_artist where pk_song=?",[id],callback);
 },
 getAllSongsByArtistId:function(id,callback){
 
return db.query("Select pk_song, JSON_OBJECT('pk_artist',b.pk_artist,'artist_name',b.artist_name, 'artist_bio',b.artist_bio, 'artist_photo', b.artist_photo,'artist_cover', b.artist_cover,'artist_sc_id', b.artist_sc_id,'artist_status', b.artist_status) as artist, song_name,song_release,song_cover,song_photo,song_sc_stream_url,song_status, song_likes, song_shares, song_comments, song_listens, " + album_subquery + "  from rr_songs as a inner join rr_artists b on a.fk_artist=b.pk_artist where fk_artist=?",[id],callback);
 },
 addSong:function(Song,callback){
 return db.query("Insert into rr_songs(fk_artist,song_name,song_release,song_cover,song_photo,song_sc_id,song_status) values(?,?,?,?,?,?)",[Song.fk_artist,Song.song_name,Song.song_release,Song.song_cover,Song.song_photo,Song.song_sc_id,Song.song_status],callback);
 },
 deleteSong:function(id,callback){
  return db.query("delete from rr_songs where pk_song=?",[id],callback);
 },
 updateSong:function(id,Song,callback){
  return db.query("update rr_songs set fk_artist,song_name=?,song_release=?,song_cover=?,song_photo=?,song_sc_id=?,song_status=? where pk_song=?",[Song.fk_artist,Song.song_name,Song.song_release,Song.song_cover,Song.song_photo,Song.song_sc_id,Song.song_status,id],callback);
 },
 AddShare:function(id,callback) {
 	return db.query("update rr_songs set song_shares = song_shares + 1 where pk_song=?",[id], callback);
 },
 AddListen:function(id, userid, callback) {
 	return db.query("insert into rr_songs_listens (fk_user, fk_song) values(?,?)",[userid, id], callback);
 }
 
};
 module.exports=Song;