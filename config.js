module.exports = {
    api: {
        port: process.env.API_PORT || 3000,
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'remotemysql.com',
        user: process.env.MYSQL_USER || 'xSLo3ser5A',
        password: process.env.MYSQL_PASS || 'CvoYTihfdX',
        database: process.env.MYSQL_DB || 'xSLo3ser5A',
    }
}