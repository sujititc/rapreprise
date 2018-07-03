var express = require('express');
var router = express.Router();
var Schedule=require('../models/Schedule');
 
router.get('/:id?',function(req,res,next){
 
if(req.params.id){
 
Schedule.getScheduleById(req.params.id,function(err,rows){
 
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
 
Schedule.getAllSchedules(function(err,rows){
 
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
 router.post('/',function(req,res,next){
 
Schedule.addSchedule(req.body,function(err,count){
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
 
Schedule.deleteSchedule(req.params.id,function(err,count){
 
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
 
Schedule.updateSchedule(req.params.id,req.body,function(err,rows){
 
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