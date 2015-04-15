var action = {
    index: {
        get: function (req, res, next) {
            return res.send('ok');
        }
    }
};

module.exports = action;