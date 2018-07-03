var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors=require('cors');
var crypto = require('crypto');

var index = require('./routes/index');
var User = require('./routes/User');
var Artist=require('./routes/Artist');
var Song=require('./routes/Song');
var Album=require('./routes/Album');
var Section=require('./routes/Section');
var Video=require('./routes/Video');
var AlbumRate=require('./routes/AlbumRate');
var SongRate=require('./routes/SongRate');
var ArtistRate=require('./routes/ArtistRate');
var StudioRate=require('./routes/StudioRate');
var VideoRate=require('./routes/VideoRate');
var Booking=require('./routes/Booking');
var Gallery=require('./routes/Gallery');
var GalleryImage=require('./routes/GalleryImage');
var Order=require('./routes/Order');
var PaymentMethod=require('./routes/PaymentMethod');
var Schedule=require('./routes/Schedule');
var Studio=require('./routes/Studio');
var StudioPlan=require('./routes/StudioPlan');
var StudioSpeciality=require('./routes/StudioSpeciality');
var StudioSchedule=require('./routes/StudioSchedule');
var Event=require('./routes/Event');
var RapReports=require('./routes/RapReports')
var Trending=require('./routes/Trending');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use('/', index);
app.use('/User', User);

app.use('/Artist',Artist);
app.use('/Song',Song);
app.use('/Album',Album);
app.use('/Section',Section);
app.use('/Video',Video);
app.use('/AlbumRate',AlbumRate);
app.use('/SongRate',SongRate);
app.use('/ArtistRate',ArtistRate);
app.use('/StudioRate',StudioRate);
app.use('/VideoRate',VideoRate);
app.use('/Booking',Booking);
app.use('/Gallery',Gallery);
app.use('/GalleryImage',GalleryImage);
app.use('/Order',Order);
app.use('/PaymentMethod',PaymentMethod);
app.use('/Schedule',Schedule);
app.use('/Studio',Studio);
app.use('/StudioPlan',StudioPlan);
app.use('/StudioSpeciality',StudioSpeciality);
app.use('/StudioSchedule',StudioSchedule);
app.use('/Event',Event);
app.use('/RapReports', RapReports)
app.use('/Trending',Trending);

console.log("test");
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  //next(err);
  res.json({"status": err.status,"error":"Not Found"});
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
