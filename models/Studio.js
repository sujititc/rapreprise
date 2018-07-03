var db=require('../dbconnection'); //reference of dbconnection.js
 
var Studio={
 
getAllStudios:function(callback){
 
return db.query("Select * from rr_studios",callback);
 
},
 getStudioById:function(id,callback){
 
return db.query("select * from rr_studios where pk_studio=?",[id],callback);
 },
 getAllStudiosByStudioSpecialityId:function(id,callback){
 
return db.query("select * from rr_studios where fk_speciality=?",[id],callback);
 },
 addStudio:function(Studio,callback){
 return db.query("Insert into rr_studios(fk_gallery,fk_studio_speciality,studio_location_latlng,studio_name,studio_description,studio_location_description,studio_phone_number,studio_producer_first_name,studio_producer_last_name,studio_equipment,cre_date,up_date) values(?,?,?,?,?,?,?,?,?,?,?,?)",[Studio.fk_gallery,Studio.fk_studio_speciality,Studio.studio_location_latlng,Studio.studio_name,Studio.studio_description,Studio.studio_location_description,Studio.studio_phone_number,Studio.studio_producer_first_name,Studio.studio_producer_last_name,Studio.studio_equipment,Studio.cre_date,Studio.up_date],callback);
 },
 deleteStudio:function(id,callback){
  return db.query("delete from rr_studios where pk_studio=?",[id],callback);
 },
 updateStudio:function(id,Studio,callback){
  return db.query("update rr_studios set fk_gallery=?,fk_studio_speciality=?,studio_location_latlng=?,studio_name=?,studio_description=?,studio_location_description=?,studio_phone_number=?,studio_producer_first_name=?,studio_producer_last_name=?,studio_equipment=?,cre_date=?,up_date=? where pk_studio=?",[Studio.fk_gallery,Studio.fk_studio_speciality,Studio.studio_location_latlng,Studio.studio_name,Studio.studio_description,Studio.studio_location_description,Studio.studio_phone_number,Studio.studio_producer_first_name,Studio.studio_producer_last_name,Studio.studio_equipment,Studio.cre_date,Studio.up_date,id],callback);
 }
 
};
 module.exports=Studio;