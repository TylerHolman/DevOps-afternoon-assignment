const express = require(`express`)
const path = require(`path`)
const app = express()

app.use(express.json())

app.get(`/`, (req, res) => {
    res.sendFile(path.join(__dirname, `../public/index.html`))
})

app.use(express.static(path.join(__dirname, `../public`)))


const port = process.env.PORT || 4545

app.listen(port, () => console.log(`Take us to warp ${port}!`))