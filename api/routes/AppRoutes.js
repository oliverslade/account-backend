'use strict';
module.exports = function (app) {
    var controller = require('../controllers/AccountController');

    app.route('/account')
        .get(controller.data)
        .post(controller.data)
};
