var db=require('../dbconnection'); //reference of dbconnection.js
 
var StudioPlan={
 
getAllStudioPlans:function(callback){
 
return db.query("Select * from rr_studios_plans",callback);
 
},
 getStudioPlanById:function(id,callback){
 
return db.query("select * from rr_studios_plans where pk_studio_plan=?",[id],callback);
 },
 getAllStudioPlansByStudioId:function(id,callback){
 
return db.query("select * from rr_studios_plans where fk_studio=?",[id],callback);
 },
 addStudioPlan:function(StudioPlan,callback){
 return db.query("Insert into rr_studios_plans(fk_studio,plan_name,plan_description,plan_price,plan_status) values(?,?,?,?,?)",[StudioPlan.fk_studio,StudioPlan.plan_name,StudioPlan.plan_description,StudioPlan.plan_price,StudioPlan.plan_status],callback);
 },
 deleteStudioPlan:function(id,callback){
  return db.query("delete from rr_studios_plans where pk_studio_plan=?",[id],callback);
 },
 updateStudioPlan:function(id,StudioPlan,callback){
  return db.query("update rr_studios_plans set fk_studio=?,plan_name=?,plan_description=?,plan_price=?,plan_status=? where pk_studio_plan=?",[StudioPlan.fk_studio,StudioPlan.plan_name,StudioPlan.plan_description,StudioPlan.plan_price,StudioPlan.plan_status,id],callback);
 }
 
};
 module.exports=StudioPlan;