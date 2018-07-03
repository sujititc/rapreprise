var express = require('express');
var router = express.Router();
var Video=require('../models/Video');
 
router.get('/:id?',function(req,res,next){
 
if(req.params.id){
 
Video.getVideoById(req.params.id,function(err,rows){
 
if(err)
  {
  res.json(err);
  }
  else{
  res.json(rows);
  }
  });
 }
 else{
 
Video.getAllVideos(function(err,rows){
 
if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(rows);
  }
 
 });
 }
 });
 router.get('/Artist/:id?',function(req,res,next){
	if(req.params.id){
		Video.getAllVideosByArtistId(req.params.id,function(err,rows){
		if(err)
		  {
		  res.json(err);
		  }
		  else{
		  res.json(rows);
		  }
		  });
	}
 });
 router.post('/',function(req,res,next){
 
Video.addVideo(req.body,function(err,count){
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
 
Video.deleteVideo(req.params.id,function(err,count){
 
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
 
Video.updateVideo(req.params.id,req.body,function(err,rows){
 
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