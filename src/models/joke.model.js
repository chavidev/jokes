module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define('joke', {
    type: {
      type: Sequelize.STRING
    },
    setup: {
      type: Sequelize.STRING
    },
    punchline: {
      type: Sequelize.STRING
    }
  })

  return Tutorial
}
