var db=require('../dbconnection'); //reference of dbconnection.js
 
var Video={
 
getAllVideos:function(callback){
 
return db.query("Select * from rr_videos",callback);
 
},
 getVideoById:function(id,callback){
 
return db.query("select * from rr_videos where pk_video=?",[id],callback);
 },
 getAllVideosByArtistId:function(id,callback){
 
return db.query("select * from rr_videos where fk_artist=?",[id],callback);
 },
 addVideo:function(Video,callback){
 return db.query("Insert into rr_videos(fk_artist,video_name,video_release,video_url,video_status) values(?,?,?,?,?)",[Video.fk_artist,Video.video_name,Video.video_release,Video.video_url,Video.video_status],callback);
 },
 deleteVideo:function(id,callback){
  return db.query("delete from rr_videos where pk_video=?",[id],callback);
 },
 updateVideo:function(id,Video,callback){
  return db.query("update rr_videos set fk_artist=?,video_name=?,video_release=?,video_url=?,video_status=? where pk_video=?",[Video.fk_artist,Video.video_name,Video.video_release,Video.video_url,Video.video_status,id],callback);
 }
 
};
 module.exports=Video;