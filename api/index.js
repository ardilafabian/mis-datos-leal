const express = require('express');
const bodyParser = require('body-parser');

const config = require('../config');
const user = require('./components/user/network');
const auth = require('./components/auth/network');
const transaction = require('./components/transaction/network');
const errors = require('../network/errors');

const app = express();

app.use(bodyParser.json());

// ROUTES
app.use('/user', user);
app.use('/auth', auth);
app.use('/transaction', transaction);

app.use(errors);

app.listen(config.api.port, () => {
    console.log('Listening in port', config.api.port);
});