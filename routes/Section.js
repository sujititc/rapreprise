var express = require('express');
var router = express.Router();
var Section=require('../models/Section');
 
router.get('/:id?',function(req,res,next){
 
Section.getAllSections(function(err,rows){
 
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