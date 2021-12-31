const express = require('express')
const jokes = require('./jokes')
const path = require('path')
const router = express.Router()
//user
router.use('/jokes', jokes)

// hacemos que la carpeta public sea pubica y al conectar con http://localhost:{PORT}/ muestra el html
router.use(express.static(path.join(__dirname, '../public')))
router.use('/', express.static(path.join(__dirname, '../public')))

module.exports = router
