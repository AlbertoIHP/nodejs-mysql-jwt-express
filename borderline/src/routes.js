import  express   from 'express';
import userCtrl from './controllers/Users.controller.js';

import auth from "../src/auth/middleware"
/*
	File cointaining all routes to the controllers of the platform
*/


var router = express.Router();
router.get('/users', auth.authorization, userCtrl.list);
router.post('/login', userCtrl.login);

module.exports = router;