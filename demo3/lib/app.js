var path = require('path');
var express = require('express');
var route = require('./routes');
var bodyParser = require('body-parser');
var app = express();
var mvc = require('heron-mvc');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').renderFile);

mvc.route.load({
    routeDir: path.join(__dirname, './routes'),
    controllerDir: path.join(__dirname, './controllers')
}, function (data) {
    app.use("/" + data.route, data.router); // 优先加载路由
}, function (data) {
    app[data.method]("/" + data.controller + "/" + data.action, data.func); // 没有路由直接加载控制器 会根据控制器的前缀和action名称 生成两级目录
});


module.exports = app;