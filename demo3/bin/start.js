var app = require('../lib/app');

var port = 3000;
var server = app.listen(port, function () {
    console.log('http server listening on port %s', server.address().port);
});
