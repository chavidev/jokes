const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const express = require('express')
const path = require('path')
const routes = require('./routes/index')
const db = require('./models')

//inicializa la base de datos
db.sequelize.sync().then(() => {
  console.log('Drop and re-sync db.')
})

const app = express()
const port = 4000 // default port to listen  //&& PREPÁRALO BIEN PARA SUBIRLO A HEROKU  PORT.ENV  o algo parecido
const whitelist = [
  // Allow domains here
  '*'
]
const corsOptions = {
  origin(origin, callback) {
    const originIsWhitelisted = whitelist.indexOf(origin) !== -1
    callback(null, originIsWhitelisted)
  },
  credentials: true
}

// habilita el json de entrada y de salida y con el public de que sea publico
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// los cors permiten que un http://localhost:3000/ acceda a otro http://localhost:4000/ (Ej: el react conecte con Node)
app.use(cors(corsOptions))

app.use('/', routes)
// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})
