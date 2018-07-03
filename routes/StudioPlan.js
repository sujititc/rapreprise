var express = require('express');
var router = express.Router();
var StudioPlan=require('../models/StudioPlan');
 
router.get('/:id?',function(req,res,next){
 
if(req.params.id){
 
StudioPlan.getStudioPlanById(req.params.id,function(err,rows){
 
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
 
StudioPlan.getAllStudioPlans(function(err,rows){
 
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
		StudioPlan.getAllStudioPlansByStudioId(req.params.id,function(err,rows){
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
 
StudioPlan.addStudioPlan(req.body,function(err,count){
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
 
StudioPlan.deleteStudioPlan(req.params.id,function(err,count){
 
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
 
StudioPlan.updateStudioPlan(req.params.id,req.body,function(err,rows){
 
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