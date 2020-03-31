const mysql = require('mysql');

const config = require('../config');

const dbconf = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
};

// Connection
let connection;

function handleCon() {
    connection = mysql.createConnection(dbconf);

    connection.connect(err => {
        if (err) {
            console.error('[DB error]', err);
            setTimeout(handleCon, 2000);
        } else {
            console.log('DB Connected!');
        }
    });

    connection.on('error', err => {
        console.error('[DB error]', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleCon();
        } else {
            throw err;
        }
    });
}

handleCon();

function list(table) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table} ORDER BY created_date DESC`, (error, data) => {
            if (error) return reject(error);
            resolve(data);
        });
    })
}

function insert(table, data) {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO ${table} SET ?`, data, (error, result) => {
            if (error) return reject(error);
            resolve(result);
        });
    })
}

function query(table, query) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table} WHERE ?`, query, (err, res) => {
            console.log(res);
            if (err) return reject(err);
            if (res.length > 0) {
                resolve(JSON.parse(JSON.stringify(res[0])));
            } else {
                resolve(null);
            }
        });
    });
}

function getUserTransactions(userId) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM transaction WHERE user_id = '${userId}'`, (err, res) => {
            if (err) return reject(err);
            resolve(res);
        });
    });
}

module.exports = {
    list,
    query,
    insert,
    getUserTransactions
}