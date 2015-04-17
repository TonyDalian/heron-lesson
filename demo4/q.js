var firstFn = function () {
    var defer = q.defer();
    setTimeout(function () {
        console.log('This is first task.')
        defer.resolve();
    }, 200);
    return defer.promise;
};
var secondFn = function () {
    var defer = q.defer();
    setTimeout(function () {
        console.log('This is second task.')
        defer.resolve();
    }, 10);
    return defer.promise;
};


var q = require('q');

firstFn()
    .then(function () {
        return secondFn();
    })
    .done(function () {
        console.log('done')
    });

