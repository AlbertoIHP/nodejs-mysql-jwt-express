//import mysql from 'mysql';
var jwt = require('jsonwebtoken');
import models from '../config/sequelize'
import help from '../tools/email-helper'
function list(req, res, next) {
  models.user.findAll({})
    .then((data) => {
    	//help.helpMAil;
      res.json(data);
    })
    .catch(e => next(e));
}
function login(req, res, next){
  models.user.find({
    where : {
      nickname : req.body.nickname,
      password : req.body.password
    }
  }).then((userL) =>{
    var data = userL.dataValues;
    var theToken = jwt.sign({ user : data.id}, "sasasasa", {expiresIn: 24 * 60 * 60});
    res.json({token : theToken});
  }).catch((e)=>{
    res.status(200).json({status : false, "data": {'message' : 'Wrong credentials'}});
  });

  }
  function register(req, res, next) {

    models.user.build({
      nickname : req.body.nickname,
      name : req.body.name,
      lastname : req.body.lastname,
      phone : req.body.phone,
      email : req.body.email,
      password : req.body.password,
      role_id : req.body.role_id
      
    }).save().then(() =>{
    res.json({status : true, data : null});
    }).catch(e =>{
      console.log(e);
      res.json({status : false, data : {message : e}});
    });
    
  }
module.exports = {
  list,
  login

};
