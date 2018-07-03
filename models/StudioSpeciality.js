var db=require('../dbconnection'); //reference of dbconnection.js
 
var StudioSpeciality={
 
getAllStudioSpecialitys:function(callback){
 
return db.query("Select * from rr_studios_speciality",callback);
 
},
 getStudioSpecialityById:function(id,callback){
 
return db.query("select * from rr_studios_speciality where pk_speciality=?",[id],callback);
 },
 addStudioSpeciality:function(StudioSpeciality,callback){
 return db.query("Insert into rr_studios_speciality(category_name) values(?)",[StudioSpeciality.category_name],callback);
 },
 deleteStudioSpeciality:function(id,callback){
  return db.query("delete from rr_studios_speciality where pk_speciality=?",[id],callback);
 },
 updateStudioSpeciality:function(id,StudioSpeciality,callback){
  return db.query("update rr_studios_speciality set category_name=? where pk_speciality=?",[StudioSpeciality.category_name,id],callback);
 }
 
};
 module.exports=StudioSpeciality;