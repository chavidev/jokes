const express = require('express')
const { getJokes } = require('../controllers/jokes')

const router = express.Router()
//user
router.get('/', getJokes)
module.exports = router
