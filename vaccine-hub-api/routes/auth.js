const express = require("extress")
const router = express.Router()

router.post("/login", async (req, res, next) => {
    try {

    } catch (err) {
        next(err)
    }
})

router.post("/register", async (req, res, next) => {
    try {
        
    } catch (err) {
        next(err)
    }
})

module.exports = router