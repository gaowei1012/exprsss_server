const UserModal = require('../mysql/mysql');
const { createAt } = require('../utils/format')

class UserControler {
    async getinfo(res, req) {
        const date = createAt()
        console.log('date', date)
        try {
            req.json({
                code: 1,
                data: date
            })
        } catch {
            req.json({
                code: -1,
                err: 'error message'
            })
        }
    }

    async auth(res, req) {

        try {
            let { username } = res.body;
            await UserModal.finUserByName(username)
                .then(ret => {
                    let result = ret[0].username
                    if (result == username) {
                        req.json({
                            code: 1,
                            message: '用户已注册'
                        })
                    } else {
                        req.json({
                            code: 1,
                            message: '可以注册'
                        })
                    }
                })
                .catch(err => {
                    req.json({
                        code: -1,
                        data: err
                    })
                })
        } catch {
            req.json({
                code: 1,
                data: '验证失败'
            })
        }
    }

    async register(res, req) {
        try {
            let { username, password } = res.body;
            console.log('res', username)
            let create_at = createAt()
            await UserModal.register([username, password, create_at])
                .then(ret => {
                    req.json({
                        code: 1,
                        data: '注册成功'
                    })
                })
                .catch(err => {
                    req.json({
                        code: 1,
                        data: err
                    })
                })

        } catch {
            req.json({
                code: 1,
                data: '注册失败'
            })
        }
    }

    async login(res, req) {
        try {
            req.json({
                code: 1,
                data: '登录成功'
            })
        } catch {
            req.json({
                code: 1,
                data: '登录失败'
            })
        }
    }
}

module.exports = new UserControler()
