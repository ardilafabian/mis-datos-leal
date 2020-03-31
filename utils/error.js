// Con este archivo se podrá personalizar los errores con códigos 
// específicos de acuerdo a donde acurrió el fallo

function error(message, code) {
    let e = new Error(message);

    if (code) {
        e.statusCode = code;
    }

    return e;
}

module.exports =  error;