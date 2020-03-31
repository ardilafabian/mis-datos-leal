const express = require('express');

const secure = require('./secure');
const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();

// Routes
router.get('/history', list);
router.post('/', secure('getInfo'), register);

// Internal functions
function list(req, res, next) {
    Controller.list()
        .then((list) => {
            response.success(req, res, list, 200);
        })
        .catch(next);
}

function register(req, res, next) {
    Controller.register(req.user.id, req.body)
        .then(result => {
            response.success(req, res, result, 200);
        })
        .catch(next);
}

module.exports = router;