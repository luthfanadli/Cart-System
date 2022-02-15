const { User } = require('../models')

class UserController {
    static async addUser(req, res, next) {
        try {
            const { username } = req.body
            const user = await User.findOne({ where: { username } })
            if (user) throw { name: 'UniqueUsername' }
            else {
                const newUser = await User.create({ username })
                res.status(201).json({ username: newUser.username })
            }
        } catch (err) {
            next(err)
        }
    }
}

module.exports = UserController;