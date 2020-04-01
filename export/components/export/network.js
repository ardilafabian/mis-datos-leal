const express = require('express');

const secure = require('./secure');
const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();

// Routes
router.get('/user/:id/transactions', secure('export'), exportUserTransactions);

// Internal functions
function exportUserTransactions(req, res, next) {
    Controller.exportUserTransactions(req.params.id)
        .then((trans) => {
            response.success(req, res, trans, 200);
        })
        .catch(next);
}

module.exports = router;