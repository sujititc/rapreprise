var db=require('../dbconnection'); //reference of dbconnection.js
 
var GalleryImage={
 
getAllGalleryImages:function(callback){
 
return db.query("Select * from rr_gallery_images",callback);
 
},
 getGalleryImageById:function(id,callback){
 
return db.query("select * from rr_gallery_images where pk_image=?",[id],callback);
 },
 getAllGalleryImagesByGalleryId:function(id,callback){
 
return db.query("select * from rr_gallery_images where fk_gallery=?",[id],callback);
 },
 addGalleryImage:function(GalleryImage,callback){
 return db.query("Insert into rr_gallery_images(fk_gallery,image_title,image_uri) values(?,?,?)",[GalleryImage.fk_gallery,GalleryImage.image_title,GalleryImage.image_uri],callback);
 },
 deleteGalleryImage:function(id,callback){
  return db.query("delete from rr_gallery_images where pk_image=?",[id],callback);
 },
 updateGalleryImage:function(id,GalleryImage,callback){
  return db.query("update rr_gallery_images set fk_gallery=?,image_title=?,image_uri=? where pk_image=?",[GalleryImage.fk_gallery,GalleryImage.image_title,GalleryImage.image_uri,id],callback);
 }
 
};
 module.exports=GalleryImage;