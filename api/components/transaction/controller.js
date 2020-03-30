const TABLA = 'transaction';

module.exports = function(injectedStore) {
    let store = injectedStore;

    function list() {
        return store.list(TABLA);
    }

    function insert(data) {
        
    }

    return {
        list,
        insert
    }
}