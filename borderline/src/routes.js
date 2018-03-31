/*import { Router }  from 'express';
import userCtrl from './controllers/Users.controller.js';

*/

/*
	File cointaining all routes to the controllers of the platform
*/


var rout =  require('express');
var userCtrl = require('./controllers/Users.controller.js');
import postsCtrl from '../src/controllers/Posts.controller';
var express = require('express');
var router = rout.Router();
router.get('/users', userCtrl.list);
router.post('/login', userCtrl.login);
router.post('/register', userCtrl.register);
router.get('/profile/:id', userCtrl.profile);

router.get('/posts', postsCtrl.list);

module.exports = router;