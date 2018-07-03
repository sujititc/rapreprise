var express = require('express');
var router = express.Router();
var Album=require('../models/Album');

var parseToObject = function(rows){
  rows.forEach(function(row){
    var artist = JSON.parse(row.artist);
    row.artist = artist
  });
  return rows;
}
 
router.get('/:id?',function(req,res,next){
 
if(req.params.id){
 
Album.getAlbumById(req.params.id,function(err,rows){
 
if(err)
  {
  res.json(err);
  }
  else{
    rows = parseToObject(rows);
    res.json(rows);
  }
  });
 }
 else{
 
Album.getAllAlbums(function(err,rows){
 
if(err)
  {
  res.json(err);
  }
  else
  {
    rows = parseToObject(rows);
    res.json(rows);
  }
 
 });
 }
 });
 router.get('/Artist/:id?',function(req,res,next){
	if(req.params.id){
		Album.getAllAlbumsByArtistId(req.params.id,function(err,rows){
		if(err)
		  {
		  res.json(err);
		  }
		  else{
		    rows = parseToObject(rows);
        res.json(rows);
		  }
		  });
	}
 });
 router.post('/',function(req,res,next){
 
Album.addAlbum(req.body,function(err,count){
  if(err)
  {
  res.json(err);
  }
  else{
  res.json(req.body);//or return count for 1 &amp;amp;amp; 0
  }
  });
 });
 router.delete('/:id',function(req,res,next){
 
Album.deleteAlbum(req.params.id,function(err,count){
 
if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(count);
  }
 
});
 });
 router.put('/:id',function(req,res,next){
 
Album.updateAlbum(req.params.id,req.body,function(err,rows){
 
if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(rows);
  }
  });
 });
 module.exports=router;