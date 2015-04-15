var express = require('express');
var controller = require('../controllers/listController');
var router = express.Router();

router.get('/index', controller.index.get)
    .post('/index', controller.index.post);

module.exports = router;