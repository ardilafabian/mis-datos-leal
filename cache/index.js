const express = require('express');
const bodyParser = require('body-parser');

const config = require('../config');
const router = require('./network');

const app = express();

app.use(bodyParser.json());

// ROUTES
app.use('/', router)

app.listen(config.cacheService.port, () => {
    console.log('Servicio de Cache redis escuchando en puerto ', config.cacheService.port);
});