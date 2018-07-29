import  express   from 'express';
import userCtrl from './controllers/Users.controller.js';

/*
	File cointaining all routes to the controllers of the platform
*/


var router = express.Router();
router.get('/users', userCtrl.list);

module.exports = router;