module.exports = function (req, res, next) {
    if (req.isAuthenticated()){
        return next()
    }else{
        //req.flash('error', 'You have to be logged in to access the page.')
        res.redirect('/users/login')
    }
}