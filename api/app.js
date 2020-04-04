const express = require('express')
const path = require('path')
const chalk = require('chalk');
const port = process.env.PORT || 9000
const testApiRouter = require("./routes/testApi")

const app = express()

app.use(express.json())
app.use(express.static(path.join(__dirname, "public")))
app.use('/testApi', testApiRouter)

const server = app.listen(port, () => {
    console.log(chalk.yellow(`Rowing Club listening at http://${server.address().address}: ${server.address().port}`))
});