//require Router
const router = require('express').Router();
// '/api
const userRoute = require('./user');
//bring in user route
router.use('/user', userRoute);
//export route
module.exports = router;