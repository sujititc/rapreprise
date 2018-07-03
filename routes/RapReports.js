var express = require('express');
var router = express.Router();
var RapReports=require('../models/RapReports');

router.get("/",function(req,res,next){
	RapReports.getAllRapReports(function(err,rows){
		if(err){
			res.json(err);
		}else {
			res.json(rows);
		}
	});
});

module.exports=router;