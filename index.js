const app = require('express')()
const bodyParser = require('body-parser')
const log4js = require('log4js')
const { config, database } = require('./config/default')
const routes = require('./routers')
const session = require('express-session')
const MysqlStore = require('express-mysql-session')(session)

const { host, port } = config

const options = {
    user: database.USERNAME,
    password: database.PASSWORD,
    database: database.DATABASE,
    host: database.HOST
}

const sessionStore = new MysqlStore(options)

app.use(session({
    key: 'cookie_name',
    secret: 'session_cookie_secret',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

routes(app)

app.listen(port, () => {
    console.log(`http://${host}:${port}`)
})
