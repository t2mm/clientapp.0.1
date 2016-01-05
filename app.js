// application

var express = require('express'),
    app = express(),
    setupHandlebars  = require('./app/utils/setupHandlebars.js')(app),
    setupPassport = require('./app/utils/setupPassport'),
    flash = require('connect-flash'),
    appRouter = require('./app/routers/appRouter.js')(express),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    jsonParser = bodyParser.json(),
    glob = require('glob');

var port = process.env.PORT || 3000

app.use(cookieParser())
app.use(session({ secret: '4564f6s4fdsfdfd', resave: false, saveUninitialized: false }))

app.use('/styles', express.static(__dirname + '/styles'))

app.use(flash())
app.use(function(req, res, next) {
    res.locals.errorMessage = req.flash('error')
    next()
});

app.use(jsonParser)
app.use(bodyParser.urlencoded({
  extended: true
}))

setupPassport(app)

var routers = glob.sync('./app/routers/*.js');
routers.forEach(function (router) {
    app.use('/', require(router)(express));
});


// start app
app.listen(port)
console.log('Server started on port ' + port)

module.exports.getApp = app