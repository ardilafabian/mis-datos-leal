const bcrypt = require('bcrypt');

const TABLA = 'auth';

module.exports = function(injectedStore) {
    let store = injectedStore;

    async function insert(data) {
        const authData = {
            id: data.id
        }

        if (data.email) {
            authData.email = data.email;
        }

        if (data.password) {
            authData.password = await bcrypt.hash(data.password, 5);
        }

        return store.insert(TABLA, authData);
    }

    return {
        insert
    }
};