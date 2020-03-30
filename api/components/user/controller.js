const md5 = require('md5');

const TABLA = 'user';

module.exports = function(injectedStore) {
    let store = injectedStore;

    function list() {
        return store.list(TABLA);
    }

    async function registerUser(data) {
        // TODO: verify if the user doesn't exist
        userId = md5(data.email);

        const userExist = await store.query(TABLA, {
            id:userId
        });
        console.log("------>");
        console.log(userExist);
        if (userExist) {
            throw new Error('Usuario ya existe.');
        }

        const user = {
            id: userId,
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