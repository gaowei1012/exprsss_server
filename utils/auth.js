
const jwt = require('jsonwebtoken')
const { jwtSecret, tokenExpiresTime} = require('../config/default')

module.exports = {
    /**
     * 创建token
     * @param {*} uuid 
     */
    createToken(uuid) {
        const token = jwt.sign(
            {userId: uuid},
            jwtSecret,
            {expiresIn: tokenExpiresTime}
        )
        return token
    },

    /**
     * 验证token
     * @param {*} token 
     */
    verifyToken(token) {
        const result = jwt.verify(token, jwtSecret)
        return result
    }

}