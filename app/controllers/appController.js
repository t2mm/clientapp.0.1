var Model = require('../model/models.js');


module.exports.redirectToDash = function(req, res) {
    res.redirect('/dashboard/');
}


module.exports.show = function(req, res) {
	res.render('dashboard', {
	    user : req.user
	});
}