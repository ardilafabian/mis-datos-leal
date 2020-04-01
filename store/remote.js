// Configuación para poder dejar extensible la conexión a DBs, es sólo constructor

const request = require('request');

function createRemoteDB(host, port) {
    const URL = 'http://' + host + ':' + port;

    function list(table) {
        return req('GET', table);
    }

    function insert(table, data) {
        return req('POST', table, data);
    }

    function query(table, q) {
        return req('POST', table + '/query', q);
    }

    function getUserTransactions(id) {
        return req('GET', 'user/' + id + '/transactions');
    }

    function getUserPoints(id) {
        return req('GET', 'user/' + id + '/points');
    }

    function deactivateTransaction(id) {
        return req('PUT', 'transaction/' + id + '/deactivate');
    }

    function req(method, table, data) {
        let url = URL + '/' + table;
        body = '';

        if (method === 'GET' && data) {
			url += '/'+ data;
		} else if (data) {
			body = JSON.stringify(data);
		}

        return new Promise((resolve, reject) => {
            request({
                method,
                headers: {
                    'content-type': 'application/json'
                },
                url,
                body
            }, (err, req, body) => {
                if (err) {
                    console.log('Error con la base de datos remota', err);
                    return reject(err.message);
                }

                const resp = JSON.parse(body);
                return resolve(resp.body);
            })
        });
    }

    return {
        list,
        insert,
        query,
        getUserTransactions,
        getUserPoints,
        deactivateTransaction,
    }
}

module.exports = createRemoteDB;