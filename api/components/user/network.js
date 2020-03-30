const express = require('express');

const router = express.Router();

// Routes
router.get('/', list);

// Internal functions
function list(req, res, next) {
    res.send('Todo funciona');
}

module.exports = router;