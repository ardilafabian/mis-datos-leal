const store = require('../../../mysql/store/remote-mysql');
const ctrl = require('./controller');

module.exports = ctrl(store);