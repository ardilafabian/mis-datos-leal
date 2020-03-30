// Todas las repsuestas desde el mismo archivo para tener un standar de respuesta

exports.success = function(req, res, message, status = 200) {
    res.status(status).send({
        error: false,
        status: status,
        body: message
    })
}

exports.error = function(req, res, message = 'Internal Server Error', status = 500) {
    res.status(status).send({
        error: true,
        status: status,
        body: message
    })
}