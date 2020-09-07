const Controllers = require('../controller')

module.exports = (app) => {
   
    require('./user')(app)
    require('./article')(app)
}
