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
  models.user.findAll({
    where : {
      email : req.body.email,
      password : req.body.password,
      active : 1
    }
  }).then((userL) =>{
    var data = userL[0].dataValues;
    var theToken = jwt.sign({ user : data.id}, "sasasasa", {expiresIn: 24 * 60 * 60});
    res.json({token : theToken});
  }).catch((e)=>{
    res.status(401).json({status : "Wrong credentials"});
  });

  }
module.exports = {
  list,
  login

};
