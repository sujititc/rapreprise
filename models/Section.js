var db=require('../dbconnection'); //reference of dbconnection.js
 
var Section={ 
	getAllSections:function(callback){
	 
	return db.query("Select * from rr_sections",callback);
	 
	}
};
 module.exports=Section;