const md5 = require('md5');
const auth = require('../auth');

const TABLA = 'user';

module.exports = function(injectedStore) {
    let store = injectedStore;

    function list() {
        return store.list(TABLA);
    }

    async function registerUser(data) {
        // Verify if the user exists
        userId = md5(data.email);

        const userExist = await store.query(TABLA, {
            id:userId
        });

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

        await auth.insert({
            id: user.id,
            email: user.email,
            password: data.password
        });

        return store.registerUser(TABLA, user);
    }

    return {
        list,
        registerUser
    }
}