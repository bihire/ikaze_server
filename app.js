const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const morgan = require('morgan')
const cors = require('cors')
const {
  sequelize
} = require('./models')
const config = require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())


require('./routes.js')(app)

sequelize.sync({
    force: false
  })
  .then(() => {
    app.listen(config.port)
    console.log(`app started on port ${config.port}`)
  })
