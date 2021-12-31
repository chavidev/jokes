const dbConfig = require('../config')
const path = require('path')
const { Sequelize } = require('sequelize')
//console.log(dbConfig)
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: dbConfig.PORT,
  native: true,
  ssl: true,
  define: {
    timestamps: false
  }
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.joke = require('./joke.model.js')(sequelize, Sequelize)

module.exports = db
