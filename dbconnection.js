var mysql=require('mysql');

var connection=mysql.createPool({
	host:'tk3mehkfmmrhjg0b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	user:'syx2g94zgah7wrji',
	password:'kmyo3yhy15q7gurc',
	database:'g5p1th37c02c76ki'
});
module.exports=connection;