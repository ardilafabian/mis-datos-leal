const express = require('express');

const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();

// Routes
router.get('/', list);
router.post('/', register);

// Internal functions
function list(req, res, next) {
    Controller.list()
        .then((list) => {
            response.success(req, res, list, 200);
        })
        .catch(next);
}

function register(req, res, next) {
    Controller.registerUser(req.body)
        .then((list) => {
            response.success(req, res, list, 200);
        })
        .catch(next);
}

module.exports = router;