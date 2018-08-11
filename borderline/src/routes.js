import  express   from 'express';
import userCtrl from './controllers/Users.controller.js';
import passport from 'passport';
import JwtStrategy from 'passport-jwt/lib/strategy';
import ExtractJwt from 'passport-jwt/lib/extract_jwt';
import config from './config/settings'

import auth from "../src/auth/middleware"
const opts = {
	jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey : config.security.salt
}
passport.use( new JwtStrategy(opts, (jwt_payload, done) => {
    return done(null, true);
}));
/*
	File cointaining all routes to the controllers of the platform
*/


var router = express.Router();
// router.get('/users', passport.authenticate('jwt', { session: false }), userCtrl.list);

router.get('/users', auth.authorization, userCtrl.list);
router.post('/login', userCtrl.login);

module.exports = router;