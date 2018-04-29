const controller = require('../controller/index');

module.exports = [
    {
        method: 'GET',
        path: '/{timestamp}',
        handler: controller.view,
    }
];