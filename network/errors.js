// Se crea archivo para poder estandarizar los errores sin que se muestre 
// la traza completa al usuario

const response = require('./response');

function errors(err, req, res, next) {
    console.error('[error]', err);

    const message = err.message || 'Error interno.';
    const status = err.statusCode || 500;

    response.error(req, res, message, status);
}

module.exports = errors;