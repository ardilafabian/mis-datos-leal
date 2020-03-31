const express = require('express');

const response = require('../network/response');
const Store = require('../store/mysql');

const router = express.Router();

router.get('/:table', list);

async function list(req, res, next) {
    const data = await Store.list(req.params.table);
    response.success(req, res, data, 200);
}

module.exports = router;