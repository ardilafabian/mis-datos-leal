module.exports = {
    remoteDB: process.env.REMOTE_DB || false,
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
    },
    cacheService: {
        host: process.env.CACHE_SRV_HOST || 'localhost',
        port: process.env.CACHE_SRV_PORT || 3004
    },
    redis: {
        host: process.env.REDIS_HOST || 'redis-10258.c14.us-east-1-3.ec2.cloud.redislabs.com',
        port: process.env.REDIS_PORT || 10258,
        password: process.env.REDIS_PASS || '2bzzkdafQ24vjkcP2LqXJckbWUEG38ML'
    }
}