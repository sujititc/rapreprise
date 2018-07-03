var express = require('express');
var router = express.Router();
var SongRate=require('../models/SongRate');
 
router.get('/:id?',function(req,res,next){
 
if(req.params.id){
 
SongRate.getSongRateById(req.params.id,function(err,rows){
 
if(err)
  {
  res.json({"status" : 500, "error" : err});
  }
  else{
  res.json({"status" : 200, "response" : rows});
  }
  });
 }
 else{
 
SongRate.getAllSongRates(function(err,rows){
 
if(err)
  {
  res.json({"status" : 500, "error" : err});
  }
  else
  {
  res.json({"status" : 200, "response" : rows});
  }
 
 });
 }
 });
 router.get('/Song/:id?',function(req,res,next){
	if(req.params.id){
		SongRate.getAllSongRatesBySongId(req.params.id,function(err,rows){
		if(err)
		  {
		  res.json({"status" : 500, "error" : err});
		  }
		  else{
		  res.json({"status" : 200, "response" : rows});
		  }
		  });
	}
 });
 router.post('/',function(req,res,next){
 
SongRate.addSongRate(req.body,function(err,count){
  if(err)
  {
  res.json({"status" : 500, "error" : err});
  }
  else{
  res.json({"status": 200, "response": "Successfully created"});//or return count for 1 &amp;amp;amp; 0
  }
  });
 });
 router.delete('/:id',function(req,res,next){
 
SongRate.deleteSongRate(req.params.id,function(err,count){
 
if(err)
  {
  res.json({"status" : 500, "error" : err});
  }
  else
  {
  res.json({"status": 200, "response": "Successfully deleted"})
  }
 
});
 });
 router.put('/:id',function(req,res,next){
 
SongRate.updateSongRate(req.params.id,req.body,function(err,rows){
 
if(err)
  {
  res.json({"status" : 500, "error" : err});
  }
  else
  {
  res.json({"status" : 200, "response" : rows});
  }
  });
 });
 module.exports=router;