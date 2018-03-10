//import mysql from 'mysql';
var jwt = require('jsonwebtoken');
const Sequelize = require('sequelize');
//var mysql = require('mysql');
/*var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "borderline"
});*/

const sequelize = new Sequelize('postgres://marcus:123@localhost:5432/template1');
function list(req, res, next) {
	// body...
/*	con.connect(function(err) {
	  if (err) throw err;
	  con.query("SELECT * FROM users", function (err, result, fields) {
	    if (err) throw err;
	    res.json(result);
	  });
	});*/
	res.json({status : 'ok'});
	
}
module.exports = {
  list

};
