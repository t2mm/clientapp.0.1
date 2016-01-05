var passport = require('passport'),
    appController = require('../controllers/appController.js'),
    isAuthenticated = require('../utils/isAuthenticated.js');   

module.exports = function(express) {

    var router = express.Router()

    router.get('/', isAuthenticated, appController.redirectToDash);

    router.get('/dashboard/', isAuthenticated, appController.show);

    return router
}

 