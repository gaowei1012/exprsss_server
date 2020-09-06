module.exports = {
    config: {
        host: '127.0.0.1',
        port: 9090
    },
    database: {
        DATABASE: 'opt',
        USERNAME: 'root',
        PASSWORD: 'gao129231wei',
        PORT: '3306',
        HOST: '127.0.0.1'
    },
    token: {
        tokenExpiresTime: 1000 * 60 * 60 * 24 * 7,
        jwtSecret: 'jwtSecret',
    },
}