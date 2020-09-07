const crypto = require('crypto')

module.exports = {

    /**
     * 密码加密
     * @param {*} password 
     * @param {*} saltKey 
     */
    encrypted(password, saltKey) {
        const cipher = crypto.createCipher('bf', saltKey)
        let newPsd = ''
        newPsd += cipher.update(password, 'utf8', 'hex')
        newPsd += cipher.final('hex')

        return newPsd
    },

    
    /**
     * 密码解密
     * @param {*} password 
     * @param {*} saltKey 
     */
    decrypted(password, saltKey) {
        const decipher = crypto.createDecipher('bf', saltKey)
        let oldPsd = ''
        oldPsd += decipher.update(password, 'hex', 'utf8')
        oldPsd += decipher.final('hex')

        return oldPsd
    }
}