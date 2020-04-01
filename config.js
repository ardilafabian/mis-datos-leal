module.exports = {
    api: {
        port: process.env.API_PORT || 3000,
    },
    transaction: {
        port: process.env.TRANSACTION_PORT || 3002,
    },
    export: {
        port: process.env.EXPORT_PORT || 3003,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'TODOscret'
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'remotemysql.com',
        user: process.env.MYSQL_USER || 'xSLo3ser5A',
        password: process.env.MYSQL_PASS || 'CvoYTihfdX',
        database: process.env.MYSQL_DB || 'xSLo3ser5A',
    },
    mysqlService: {
        host: process.env.MYSQL_SRV_HOST || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 3001
    }
}