var express = require('express');
var router = express.Router();
var Song=require('../models/Song');
var Artist=require('../models/Artist')

var parseToObject = function(rows){
  rows.forEach(function(row){
    var artist = JSON.parse(row.artist);
    row.artist = artist
    var album = JSON.parse(row.album);
    row.album = album
  });
  return rows;
}

router.post('/SaveStep', function(req, res, next){
  console.log(req.body);
  var response = JSON.parse("{\"response\": {\"errorCode\": \"0\",\"errorMessage\": \"Step saved sucesfully\"}}")
  res.json(response)
});

router.get('/FeaturedSong', function(req, res, next){
  Song.getFeaturedSong(function(err, rows){
    if (err) {
      res.json(err);
    } else {
      rows = parseToObject(rows);
      res.json(rows);
    }
  });
});

router.get('/:id?',function(req,res,next){
 
if(req.params.id){
 
Song.getSongById(req.params.id,function(err,rows){
 
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
 
Song.getAllSongs(function(err,rows){
 
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
		Song.getAllSongsByArtistId(req.params.id,function(err,rows){
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
 
Song.addSong(req.body,function(err,count){
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
 
Song.deleteSong(req.params.id,function(err,count){
 
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

router.post('/AddShare/:id', function(req, res, next){
  Song.AddShare(req.params.id, function(err, count){
    if(err) {
      res.json(err)
    } else {
      res.json(count);
    }
  });
});

router.post('/AddListen/:id/:userid', function(req, res, next){
  Song.AddListen(req.params.id, req.params.userid, function(err, count){
    if(err) {
      res.json(err)
    } else {
      res.json(count);
    }
  });
});

 router.put('/:id',function(req,res,next){
 
Song.updateSong(req.params.id,req.body,function(err,rows){
 
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