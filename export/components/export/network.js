const express = require('express');

const secure = require('./secure');
const json2xls = require('json2xls');
const fs = require('fs');
const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();

// Routes
router.get('/user/:id/transactions', secure('export'), exportUserTransactions);

// Internal functions
function exportUserTransactions(req, res, next) {
    Controller.userTransactions(req.params.id)
        .then(result => {
            const data = json2xls(result);
            fs.writeFileSync('../../files/transacciones.xlsx', data, 'binary');

            response.success(req, res, result, 200);
        })
        .catch(next);
}

module.exports = router;