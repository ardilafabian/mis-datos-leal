const json2xls = require('json2xls');

module.exports = function(injectedStore) {
    let store = injectedStore;

    function exportUserTransactions(userId) {
        return store.getUserTransactions(userId);
    }

    return {
        exportUserTransactions,
    }
}