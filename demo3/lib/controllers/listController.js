var data = [
    {name: '张三', age: 20},
    {name: '李四', age: 22}
];

var action = {
    index: {
        get: function (req, res, next) {
            return res.render('list/index', {data: data});
        },
        post: function (req, res, next) {
            var list = [];
            data.forEach(function (item) {
               if (item.name === req.body.q)
                   list.push(item);
            });
            return res.render('list/index', {data: list});
        }
    }
};

module.exports = action;