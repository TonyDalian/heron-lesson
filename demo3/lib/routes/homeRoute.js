var express = require('express');
var controller = require('../controllers/homeController');
var router = express.Router();

router.get('/', controller.index.get);

module.exports = router;