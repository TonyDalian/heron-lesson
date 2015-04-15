var homeRoute = require('./homeRoute');
var listRoute = require('./listRoute');
module.exports = function (app) {
    app.use(homeRoute);
    app.use('/list', listRoute);
}