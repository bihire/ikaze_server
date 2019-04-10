const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const {
  sequelize
} = require('./models')
const config = require('./config/config')
const app = express()


require('./routes.js')(app)

sequelize.sync({
    force: false
  })
  .then(() => {
    app.listen(config.port)
    console.log(`app started on port ${config.port}`)
  })
