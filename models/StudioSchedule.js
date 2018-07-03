var db=require('../dbconnection'); //reference of dbconnection.js
 
var StudioSchedule={
 
getAllStudioSchedules:function(callback){
 
return db.query("Select * from rr_studios_schedules",callback);
 
},
 getStudioScheduleById:function(id,callback){
 
return db.query("select * from rr_studios_schedules where pk_studio_schedule=?",[id],callback);
 },
 getAllStudioSchedulesByStudioId:function(id,callback){
 
return db.query("select * from rr_studios_schedules where fk_studio=?",[id],callback);
 },
 addStudioSchedule:function(StudioSchedule,callback){
 return db.query("Insert into rr_studios_schedules(fk_studio,fk_schedule,status) values(?,?,?)",[StudioSchedule.fk_studio,StudioSchedule.fk_schedule,StudioSchedule.status],callback);
 },
 deleteStudioSchedule:function(id,callback){
  return db.query("delete from rr_studios_schedules where pk_studio_schedules=?",[id],callback);
 },
 updateStudioSchedule:function(id,StudioSchedule,callback){
  return db.query("update rr_studios_schedules set fk_studio=?,fk_schedule=?,status=? where pk_studio_schedule=?",[StudioSchedule.fk_studio,StudioSchedule.fk_schedule,StudioSchedule.status,id],callback);
 }
 
};
 module.exports=StudioSchedule;