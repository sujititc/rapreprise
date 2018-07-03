var db=require('../dbconnection'); //reference of dbconnection.js
 
var Gallery={
 
getAllGallerys:function(callback){
 
return db.query("Select * from rr_gallery",callback);
 
},
 getGalleryById:function(id,callback){
 
return db.query("select * from rr_gallery where pk_gallery=?",[id],callback);
 },
 addGallery:function(Gallery,callback){
 return db.query("Insert into rr_gallery(gallery_description) values(?)",[Gallery.gallery_description],callback);
 },
 deleteGallery:function(id,callback){
  return db.query("delete from rr_gallery where pk_gallery=?",[id],callback);
 },
 updateGallery:function(id,Gallery,callback){
  return db.query("update rr_gallery set gallery_description=? where pk_gallery=?",[Gallery.gallery_description,id],callback);
 }
 
};
 module.exports=Gallery;