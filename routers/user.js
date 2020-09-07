const Controller = require('../controller')

module.exports = (app) => {
    app.route('/user/getInfo')
        .post(Controller.users.getinfo)
    app.route('/user/register')
        .post(Controller.users.register)
    app.route('/user/auth')
        .post(Controller.users.auth)
    app.route('/user/login')
        .post(Controller.users.login)
}
