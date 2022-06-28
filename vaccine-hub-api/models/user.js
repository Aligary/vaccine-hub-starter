const { UnauthorizedError } = require("../utils/errors")

class User {
    static async login(credentials) {
        //user should submit email and password
        //if any field missing throw an error

        //lookup user in db by email
        //if user found, compare submitted pw with pw in db
        //if match, return user

        //if any goes wrong throw an error
        throw new UnauthorizedError("Invalid email/password")
    }

    static async register(credentials) {
        //user should submit email, pw
        //if any missing, throw an error

        //make sure no user already exists in db with same email
        //if one does throw an error

        //take users pw and hash it
        //take email and lowercase it

        //create new user in db with all info

        //return user
    }
}
module.exports = User