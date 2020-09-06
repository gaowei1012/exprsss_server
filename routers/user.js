const Controller = require('../controller')

module.exports = (app) => {
    app.route('/user')
        .get(Controller.users.getinfo)
}
