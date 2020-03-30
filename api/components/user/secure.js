const auth = require('../../../auth');

module.exports = function checkAuth(action) {
    // Administrador de permisos
    function middleware(req, res, next) {
        switch (action) {
            case 'getInfo':
                const owner = req.user.id;
                auth.check.own(req, owner);
                next();
                break;
            default:
                next();
        }
    }

    return middleware;
}