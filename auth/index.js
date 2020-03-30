const jwt = require('jsonwebtoken');
const config = require('../config');

const secret = config.jwt.secret;

function sign(data) {
    return jwt.sign(data, secret);
};

function verify(token) {
    return jwt.verify(token, secret);
}

const check = {
    logged: function(req) {
        decodeHeader(req);
    }
}

function getToken(auth) {
    if(!auth) {
        throw new Error('No existe token de seguridad.');
    } 

    if (auth.indexOf('Bearer ') === -1) {
        throw new Error('Formato de token de seguridad inválido.');
    }

    let token = auth.replace('Bearer ', '');
    return token;
}

function decodeHeader() {
    // Obtiene la autorización del header
    const authorization = req.headers.authorization || '';

    // Parsea el token para remover lo innecesario
    const token = getToken(authorization);

    // Verifica que el token si sea válido
    const decoded = verify(token);

    req.user = decoded;

    return decoded;
}

module.exports = {
    sign,
    check
}