const express = require('express');

const response = require('../network/response');
const Store = require('./store/mysql');

const router = express.Router();

router.get('/:table', list);
router.post('/:table', insert);
router.post('/:table/query', query);
router.get('/user/:id/transactions', getUserTransactions);
router.get('/user/:id/points', getUserPoints);
router.put('/transaction/:id/deactivate', deactivateTransaction);

async function list(req, res, next) {
    const data = await Store.list(req.params.table);
    response.success(req, res, data, 200);
}

async function insert(req, res, next) {
    const data = await Store.insert(req.params.table, req.body);
    response.success(req, res, data, 200);
}

async function query(req, res, next) {
    const data = await Store.query(req.params.table, req.body);
    response.success(req, res, data, 200);
}

async function getUserTransactions(req, res, next) {
    const data = await  Store.getUserTransactions(req.params.id);
    response.success(req, res, data, 200);
}

async function getUserPoints(req, res, next) {
    const data = await  Store.getUserPoints(req.params.id);
    response.success(req, res, data, 200);
}

async function deactivateTransaction(req, res, next) {
    const data = await  Store.deactivateTransaction(req.params.id);
    response.success(req, res, data, 200);
}

module.exports = router;