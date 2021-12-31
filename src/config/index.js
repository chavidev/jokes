module.exports = {
  USER: process.env.USERNAMEDB,
  PASSWORD: process.env.PASS,
  HOST: process.env.HOST,
  DB: process.env.DB,
  PORT: process.env.PORTDB,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}
