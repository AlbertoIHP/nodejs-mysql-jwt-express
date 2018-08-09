
import models from '../config/sequelize'
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
function list(req, res, next) {
  models.users.findAll({})
    .then((data) => {
    	//help.helpMAil;
      res.json(data);
    })
    .catch(e => next(e));
}
function login(req, res, next){
  
}



module.exports = {
  list,

};
