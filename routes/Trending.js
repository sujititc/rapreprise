var express = require('express');
var router = express.Router();
var Trending=require('../models/Trending');

router.get("/",function(req,res,next){
	Trending.getAllTrending(function(err,rows){
		if(err){
			res.json(err);
		}else {
			res.json(rows);
		}
	});
});

module.exports=router;