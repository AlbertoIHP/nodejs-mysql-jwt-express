/*import { Router }  from 'express';
import userCtrl from './controllers/Users.controller.js';

*/

/*
	File cointaining all routes to the controllers of the platform
*/


var rout =  require('express');
var userCtrl = require('./controllers/Users.controller.js');
var express = require('express');
var router = rout.Router();
router.get('/users', userCtrl.list);
router.post('/login', userCtrl.login);

module.exports = router;