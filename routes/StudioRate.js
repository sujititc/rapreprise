var express = require('express');
var router = express.Router();
var StudioRate=require('../models/StudioRate');
 
router.get('/:id?',function(req,res,next){
 
if(req.params.id){
 
StudioRate.getStudioRateById(req.params.id,function(err,rows){
 
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
 
StudioRate.getAllStudioRates(function(err,rows){
 
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
 router.get('/Studio/:id?',function(req,res,next){
	if(req.params.id){
		StudioRate.getAllStudioRatesByStudioId(req.params.id,function(err,rows){
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
 
StudioRate.addStudioRate(req.body,function(err,count){
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
 
StudioRate.deleteStudioRate(req.params.id,function(err,count){
 
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
 
StudioRate.updateStudioRate(req.params.id,req.body,function(err,rows){
 
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