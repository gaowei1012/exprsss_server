const  config = require('config')

const configs = {}

configs.logConfig = require(`./${log4js}`)

module.exports = config
