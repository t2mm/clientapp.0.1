var passport = require('passport'),
    userController = require('../controllers/userController.js'),
    isAuthenticated = require('../utils/isAuthenticated.js');   

module.exports = function(express) {
    var router = express.Router()

    // Log in / out routes
    router.get('/users/login/', userController.showLogin);
    router.post('/users/login/', passport.authenticate('local', {
        successRedirect: '/dashboard/',
        failureRedirect: '/users/login/',
        failureFlash: true 
    }));
    router.get('/users/logout', userController.logout);


    // Sign up routes
    router.get('/users/signup/', userController.show);
    router.post('/users/signup/', userController.signup);

    // Account
    router.get('/users/account/', userController.showAccount);
    router.post('/users/account/', userController.updateAccount);

    return router
}

