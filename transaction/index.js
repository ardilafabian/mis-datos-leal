const express = require('express');
const bodyParser = require('body-parser');

const config = require('../config');
const transaction = require('./components/transaction/network');
const errors = require('../network/errors');

const app = express();

app.use(bodyParser.json());

// ROUTES
app.use('/transaction', transaction);

app.use(errors);

app.listen(config.transaction.port, () => {
    console.log('Servicio de transacciones esuchando en puerto', config.transaction.port);
});