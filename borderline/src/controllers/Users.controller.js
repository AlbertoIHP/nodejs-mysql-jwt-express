//import mysql from 'mysql';
var jwt = require('jsonwebtoken');
import models from '../config/sequelize'
import help from '../tools/email-helper'
var salt = "123456";
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
    var theToken = jwt.sign({ user : data.id}, salt, {expiresIn: 24 * 60 * 60});
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
      res.json({status : false, data : {message : "Error proscessing your request"}});
    });
    
  }
  function profile(req, res, next) {
    var token = req.headers['authorization'];
    console.log(token);
     var flag = true;
     if(token == null || token == ''){
       flag = false;
     }
     if(flag){
       jwt.verify(token, salt, function (err, decoded) {
         // body...
         if (err) {
           console.error('JWT Verification Error', err);
            return res.status(200).json({status : false, data : {message: "Token error verification"}});
         }else{
          models.user.findById(req.params.id, {attributes: {
            exclude: ['password']
        }})
          .then((userL) =>{
            //var data = userL.dataValues;
            res.status(200).json({status : true, data : {userL}});
          }).catch((e)=>{
            res.status(200).json({status : false, "data": {message : 'Wrong credentials'}});
          });
         }
       });
     }else{
       res.status(200).json({status : false , data : {message : "Token not provided"}});
     }
  }
module.exports = {
  list,
  login,
  register,
  profile

};
