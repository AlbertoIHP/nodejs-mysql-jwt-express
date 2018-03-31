//import mysql from 'mysql';
var jwt = require('jsonwebtoken');
import models from '../config/sequelize'
import help from '../tools/email-helper'
var salt = "123456";
function list(req, res, next) {
  models.operation.findAll({})
    .then((data) => {
    	//help.helpMAil;
      res.status(200).json({status : true, data : data});
    })
    .catch(e => next(e));
}
module.exports = {
  list

};
