var path = require('path');
var express = require('express');
var route = require('./routes');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').renderFile);

route(app); // 路由文件分开


module.exports = app;