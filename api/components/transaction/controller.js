const {nanoid} = require('nanoid');

const TABLA = 'transaction';

module.exports = function(injectedStore) {
    let store = injectedStore;

    function list() {
        return store.list(TABLA);
    }

    function register(userId, data) {
        const transaction = {
            id: nanoid(),
            created_date: new Date(),
            value: data.value,
            points: data.points,
            status: 0, // Por defecto al crear transacción tiene estado 0 -> activa
            user_id: userId
        }
        return store.insert(TABLA, transaction);
    }

    function deactivate(transactionId) {
        return store.deactivateTransaction(TABLA, transactionId);
    }

    return {
        list,
        register,
        deactivate
    }
}