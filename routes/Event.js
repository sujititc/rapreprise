var express = require('express');
var router = express.Router();
var Event=require('../models/Event');

var parseToObject = function(rows){
  rows.forEach(function(row){
    var artist = JSON.parse(row.artist);
    row.artist = artist
  });
  return rows;
}
 
router.get('/:id?',function(req,res,next){
 
if(req.params.id){
 
Event.getEventById(req.params.id,function(err,rows){
 
if(err)
  {
  res.json({"status" : 500, "error" : err});
  }
  else{
    rows = parseToObject(rows);
    res.json(rows);
  }
  });
 }
 else{
 
Event.getAllEvents(function(err,rows){
 
if(err)
  {
  res.json({"status" : 500, "error" : err});
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
		Event.getAllEventsByArtistId(req.params.id,function(err,rows){
		if(err)
		  {
		  res.json({"status" : 500, "error" : err});
		  }
		  else{
        rows = parseToObject(rows);
		    res.json(rows);
		  }
		  });
	}
 });
 router.post('/',function(req,res,next){
 
Event.addEvent(req.body,function(err,count){
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
 
Event.deleteEvent(req.params.id,function(err,count){
 
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
 
Event.updateEvent(req.params.id,req.body,function(err,rows){
 
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