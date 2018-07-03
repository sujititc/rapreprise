var db=require('../dbconnection'); //reference of dbconnection.js
 
var fields = "pk_event, event_date, event_description, event_hour, event_name, event_photo, event_place, event_status, event_url"

var Event={
 
getAllEvents:function(callback){
 
return db.query("Select " + fields + ", JSON_OBJECT('pk_artist',b.pk_artist,'artist_name',b.artist_name, 'artist_bio',b.artist_bio, 'artist_photo', b.artist_photo,'artist_cover', b.artist_cover,'artist_sc_id', b.artist_sc_id,'artist_status', b.artist_status) as artist from rr_events as a inner join rr_artists b on a.fk_artist=b.pk_artist",callback);
 
},
 getEventById:function(id,callback){
 
return db.query("select " + fields + ", JSON_OBJECT('pk_artist',b.pk_artist,'artist_name',b.artist_name, 'artist_bio',b.artist_bio, 'artist_photo', b.artist_photo,'artist_cover', b.artist_cover,'artist_sc_id', b.artist_sc_id,'artist_status', b.artist_status) as artist from rr_events as a inner join rr_artists b on a.fk_artist=b.pk_artist where pk_event=?",[id],callback);
 },
 getAllEventsByArtistId:function(id,callback){
 
return db.query("select " + fields + ", JSON_OBJECT('pk_artist',b.pk_artist,'artist_name',b.artist_name, 'artist_bio',b.artist_bio, 'artist_photo', b.artist_photo,'artist_cover', b.artist_cover,'artist_sc_id', b.artist_sc_id,'artist_status', b.artist_status) as artist from rr_events as a inner join rr_artists b on a.fk_artist=b.pk_artist where fk_artist=?",[id],callback);
 },
 addEvent:function(Event,callback){
 return db.query("Insert into rr_events(fk_artist,event_name,event_description,event_date,event_hour,event_place,event_url,event_status) values(?,?,?,?,?,?,?,?)",[Event.fk_artist,Event.event_name,Event.event_description,Event.event_date,Event.event_hour,Event.event_place,Event.event_url,Event.event_status],callback);
 },
 deleteEvent:function(id,callback){
  return db.query("delete from rr_events where pk_event=?",[id],callback);
 },
 updateEvent:function(id,Event,callback){
  return db.query("update rr_events set fk_artist=?,event_name=?,event_description=?,event_date=?,event_hour=?,event_place=?,event_url=?,event_status=? where pk_event=?",[Event.fk_artist,Event.event_name,Event.event_description,Event.event_date,Event.event_hour,Event.event_place,Event.event_url,Event.event_status,id],callback);
 }
 
};
 module.exports=Event;