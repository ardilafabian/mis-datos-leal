const express = require('express');

const secure = require('./secure');
const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();

// Routes
router.post('/', register);
router.get('/transactions', secure('getInfo'), getTransactionsHistory);

// Internal functions

function register(req, res, next) {
    Controller.registerUser(req.body)
        .then((list) => {
            response.success(req, res, list, 200);
        })
        .catch(next);
}

function getTransactionsHistory(req, res, next) {
    Controller.getTransactionsHistory(req.user.id)
        .then(transactions => {
            response.success(req, res, transactions, 200);
        })
        .catch(next);
}

module.exports = router;