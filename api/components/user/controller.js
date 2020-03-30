const md5 = require('md5');

const TABLA = 'user';

module.exports = function(injectedStore) {
    let store = injectedStore;

    function list() {
        return store.list(TABLA);
    }

    function registerUser(data) {
        // TODO: verify if the user doesn't exist

        const user = {
            id: md5(data.email),
            name: data.name,
            last_name: data.lastName,
            email: data.email,
            created_date: new Date(),
            birth_date: data.birth_date
        }

        return store.registerUser(TABLA, user);
    }

    return {
        list,
        registerUser
    }
}