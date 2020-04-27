//const store = require('../../../store/mysql')

const config = require('../../../config');

let store;
if (config.remoteDB === true) {
    store = require('../../../mysql/store/remote-mysql');
} else {
    store = require('../../../mysql/store/mysql'); 
}
const ctrl = require('./controller');

module.exports = ctrl(store);