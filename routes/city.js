const express = require("express")
const request = require("request")
const router = express.Router()

//GET CITY
router.get("/", async (req, res) => {
    const search = req.query.search

    try {
        request.get(
            {
                url: `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${process.env.API_KEY}&units=metric`,
                headers: {
                    "content-type": "application/json"
                }
            },
            (error, response, body) => {
                res.send(body)
            }
        )
    } catch (error) {
        res.send(error)
    }
})

module.exports = router
