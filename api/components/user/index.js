//const store = require('../../../store/mysql');
const store = require('../../../mysql/store/remote-mysql');
const ctrl = require('./controller');

module.exports = ctrl(store);