var db=require('../dbconnection'); //reference of dbconnection.js
 
var Schedule={
 
getAllSchedules:function(callback){
 
return db.query("Select * from rr_schedules",callback);
 
},
 getScheduleById:function(id,callback){
 
return db.query("select * from rr_schedules where pk_schedule=?",[id],callback);
 },
 addSchedule:function(Schedule,callback){
 return db.query("Insert into rr_schedules(initial_day,end_day,initial_hour,end_hour,schedule_status) values(?,?,?,?,?)",[Schedule.initial_day,Schedule.end_day,Schedule.initial_hour,Schedule.end_hour,Schedule.schedule_status],callback);
 },
 deleteSchedule:function(id,callback){
  return db.query("delete from rr_schedules where pk_schedule=?",[id],callback);
 },
 updateSchedule:function(id,Schedule,callback){
  return db.query("update rr_schedules set initial_day=?,end_day=?,initial_hour=?,end_hour=?,schedule_status=? where pk_schedule=?",[Schedule.initial_day,Schedule.end_day,Schedule.initial_hour,Schedule.end_hour,Schedule.schedule_status,id],callback);
 }
 
};
 module.exports=Schedule;