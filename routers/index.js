const Controllers = require('../controller')

module.exports = (app) => {
    app.post('/user/getinfo', Controllers.users.getinfo)
    app.post('/user/register', Controllers.users.register)
    app.post('/user/login', Controllers.users.login)
}
