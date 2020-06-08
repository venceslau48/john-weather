const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const path = require("path")

const app = express()

const cityRoutes = require("./routes/city")

//STATIC FILES (ASSETS)
app.use(express.static(path.join(__dirname, "client/build")))

//BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//CORS
app.use(cors())

//ROUTES
app.use("/city", cityRoutes)

//EXPRESS USING REACT APP BUILD (DEFINE ALWAYS AFTER ENDPOINTS)
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"))
})

const server = app.listen(process.env.PORT || 3001, function () {
    const port = server.address().port
    console.log("Server running on port: " + port)
})
