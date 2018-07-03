var db=require('../dbconnection'); //reference of dbconnection.js
var crypto = require('crypto');
/**
 * generates random string of characters i.e salt
 * @function
 * @param {number} length - Length of the random string.
 */
var genRandomString = function(length){
    return crypto.randomBytes(Math.ceil(length/2))
            .toString('hex') /** convert to hexadecimal format */
            .slice(0,length);   /** return required number of characters */
};
/**
 * hash password with sha512.
 * @function
 * @param {string} password - List of required fields.
 * @param {string} salt - Data to be validated.
 */
var sha512 = function(password, salt){
    var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
    hash.update(password);
    var value = hash.digest('hex');
    return {
        salt:salt,
        passwordHash:value
    };
};
function saltHashPassword(userpassword) {
    var salt = genRandomString(16); /** Gives us salt of length 16 */
    var passwordData = sha512(userpassword, salt);
    //console.log('UserPassword = '+userpassword);
    //console.log('Passwordhash = '+passwordData.passwordHash);
    //console.log('nSalt = '+passwordData.salt);
	return passwordData;
}

var User={
 
getAllUsers:function(callback){
 
return db.query("Select * from rr_users",callback);
 
},
 getUserById:function(id,callback){
 
return db.query("select * from rr_users where pk_user=?",[id],callback);
 },
 addUser:function(User,callback){
 return db.query("Insert into rr_users(username,password,fb_userid,tw_userid,enroll_date,user_status) values(?,?,?,?,?,?)",[User.username,User.password,User.fb_userid,User.tw_userid,User.enroll_date,User.user_status],callback);
 },
 deleteUser:function(id,callback){
  return db.query("delete from rr_users where pk_user=?",[id],callback);
 },
 updateUser:function(id,User,callback){
	var element = {}
	element.name = User.name;
	element.phone = User.phone;
	
		if(User.password)
		{
			var saltPass= saltHashPassword(User.password);
			element.password = saltPass.passwordHash;
			element.salt = saltPass.salt
		}
				
		return db.query("update rr_users set ? where pk_user=?",[element,id],callback);
 }
 
};
 module.exports=User;