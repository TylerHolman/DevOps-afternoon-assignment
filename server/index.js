const express = require(`express`)
const path = require(`path`)
const app = express()
// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '645d890ad77d414984615a50b59b12bc',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')
app.use(express.json())

app.get(`/`, (req, res) => {
    res.sendFile(path.join(__dirname, `../public/index.html`))
})

app.use(express.static(path.join(__dirname, `../public`)))

app.use(rollbar.errorHandler())
const port = process.env.PORT || 4545

app.listen(port, () => console.log(`Take us to warp ${port}!`))