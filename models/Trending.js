var db=require('../dbconnection');

var query = "SELECT * FROM rr_trending WHERE status=1";

var Trending = {
	getAllTrending:function(callback) {
		return db.query(query, callback)
	}
};

module.exports=Trending