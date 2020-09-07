const Controllers = require('../controller')

module.exports = (app) => {
    app.route('/article/create')
        .post(Controllers.article.create)
    app.route('/article/insertArticle')
        .post(Controllers.article.insertArricle)
}