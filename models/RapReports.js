var db=require('../dbconnection');

var query = "SELECT * FROM rr_rapreports WHERE status=1";

var RapReport = {
	getAllRapReports:function(callback) {
		return db.query(query, callback)
	}
};

module.exports=RapReport