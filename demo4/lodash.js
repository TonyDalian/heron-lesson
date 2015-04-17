var data1 = [1, 2, 3, 4, 5];
var data2 = [
    {'user': 'barney', 'age': 36, 'active': true},
    {'user': 'fred', 'age': 40, 'active': false},
    {'user': 'pebbles', 'age': 1, 'active': true}
];

var _ = require('lodash');

// find 只会返回一条数据，没有条件默认返回第一条
var r1 = _.find(data1);
console.log(r1);  // -> 1

var r2 = _.find(data1, function (item) {
   return item > 2;
});
console.log(r2); // -> 3

var r3 = _.find(data2, function (item) {
   return item.age > 20;
});
console.log(r3); // -> { user: 'barney', age: 36, active: true }


// filter 返回所有满足条件的数据, 没有条件返回所有
var r4 = _.filter(data1);
console.log(r4); // -> [ 1, 2, 3, 4, 5 ]

var r5 = _.filter(data1, function (item) {
   return item > 2;
});
console.log(r5); // -> [ 3, 4, 5 ]

var r6 = _.filter(data2, function (item) {
    return item.age > 20;
});
console.log(r6); // -> [ { user: 'barney', age: 36, active: true }, { user: 'fred', age: 40, active: false } ]

