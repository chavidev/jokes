const db = require('../models')
const joke = db.joke
const Op = db.Sequelize.Op

const getJokes = async (req, res) => {
  const data = await joke.findAll()
  return res.status(200).json(data)
}

module.exports = { getJokes }
