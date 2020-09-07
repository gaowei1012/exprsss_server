const controllers = {}

controllers.users = require('./user')
controllers.article = require('./article')

module.exports = controllers
