module.exports = {
    api: {
        port: process.env.API_PORT || 3000,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'TODOscret'
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'remotemysql.com',
        user: process.env.MYSQL_USER || 'xSLo3ser5A',
        password: process.env.MYSQL_PASS || 'CvoYTihfdX',
        database: process.env.MYSQL_DB || 'xSLo3ser5A',
    }
}