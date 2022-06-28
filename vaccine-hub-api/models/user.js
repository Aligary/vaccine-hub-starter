const { UnauthorizedError } = require("../utils/errors")

class User {
    static async login(credentials) {

        throw new UnauthorizedError("Invalid email/password")
    }

    static async register(credentials) {

    }
}
//A
module.exports = User