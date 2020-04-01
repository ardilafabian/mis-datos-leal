const md5 = require('md5');
const auth = require('../auth');
const error = require('../../../utils/error');
const formatDate =  require('../../../utils/tools');

const TABLA = 'user';

module.exports = function(injectedStore) {
    let store = injectedStore;

    async function registerUser(data) {
        userId = md5(data.email);

        // Verify if the user exists
        const userExist = await store.query(TABLA, {
            id:userId
        });

        if (userExist) {
            throw error('Usuario ya existe.', 400);
        }

        const user = {
            id: userId,
            name: data.name,
            last_name: data.lastName,
            email: data.email,
            created_date: formatDate(new Date()),
            birth_date: data.birth_date
        }

        await auth.insert({
            id: user.id,
            email: user.email,
            password: data.password
        });

        return store.insert(TABLA, user);
    }

    function getTransactionsHistory(userId) {
        return store.getUserTransactions(userId);
    }

    function getPoints(userId) {
        return store.getUserPoints(userId);
    }

    return {
        registerUser,
        getTransactionsHistory,
        getPoints,
    }
}