const auth = require('../../../auth');

module.exports = function checkAuth(action) {
    // Administrador de permisos
    function middleware(req, res, next) {
        switch (action) {
            case 'export':
                auth.check.logged(req);
                next();
                break;
            default:
                next();
        }
    }

    return middleware;
}