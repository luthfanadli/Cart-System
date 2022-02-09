const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const router = require('./routes')

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(router)

app.listen(port, () => {
  console.log(`app listening to http://localhost:${port}`)
})

module.exports = app