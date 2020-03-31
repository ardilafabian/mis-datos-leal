const bcrypt = require('bcrypt');
const auth = require('../../../auth');
const error = require('../../../utils/error');

const TABLA = 'auth';

module.exports = function(injectedStore) {
    let store = injectedStore;

    async function login(email, password) {
        const data = await store.query(TABLA, {email: email});

        if (!data) {
            // Throw error when the user doesn't exist
            throw error('Información inválida.', 400);
        }
        console.log("--------");
        console.log(data);
        return bcrypt.compare(password, data.password)
            .then(isItEqual => {
                if (isItEqual) {
                    // Generate token
                    return auth.sign(data);
                } else{
                    throw error('Información inválida.', 400);
                }
            });
    }

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
        insert,
        login
    }
};