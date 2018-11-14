import jwt from 'jsonwebtoken';
import models from '../config/sequelize';
import api from '../tools/common'
import config from '../config/settings'
var fs = require('fs');
function list(req, res) {
  models.users.findAll({
    attributes: {
      exclude: ['password']
    }
  })
    .then((data) => {
      api.ok(res, data);
    });
}
function login(req, res, next) {
  models.users.find({
    where: {
      email: req.body.email,
      password: req.body.password
    }
  }).then((userL) => {
    var data = userL.dataValues;
    var theToken = jwt.sign({ user: data.id, email: data.email }, config.security.salt, { expiresIn: 24 * 60 * 60 });
    api.ok(res, { 'token': theToken });
  }).catch((e) => {
    api.error(res, 'Wrong credentials', 500);
  });

}
function register(req, res, next) {

  models.user.build({
    nickname: req.body.nickname,
    name: req.body.name,
    lastname: req.body.lastname,
    phone: req.body.phone,
    email: req.body.email,
    password: req.body.password,
    role_id: req.body.role_id

  }).save().then(() => {
    api.ok(res, null);
  }).catch(e => {
    api.error(res, "Could not process your request", 500);
  });
}
function profile(req, res, next) {
  models.user.findById(req.params.id, {
    attributes: {
      exclude: ['password']
    }
  })
    .then((userL) => {
      //var data = userL.dataValues;
      api.ok(userL)
    }).catch((e) => {
      api.error(res, e, 500);
    });
}
function machines(req, res, next) {
  fs.readFile('./maquinas.txt', 'utf8', function(err, contents) {
    res.json(JSON.parse(contents));
  });
}
function loadJob(req, res, next) {
  var responseObject = req.body
  responseObject.JobID = 1234;
  res.json(responseObject);
}
module.exports = {
  list,
  login,
  register,
  profile,
  machines,
  loadJob

};
