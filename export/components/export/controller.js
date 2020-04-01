
module.exports = function(injectedStore) {
    let store = injectedStore;

    function userTransactions(userId) {
        return store.getUserTransactions(userId);
    }

    return {
        userTransactions,
    }
}