
class ArticleController {
    async create(res, req) {
        req.json({
            code: 1,
            data: 'create'
        })
    }


    async insertArricle(res, req) {
        req.json({
            code: 1,
            data: '插入'
        })
    }
}

module.exports = new ArticleController()
