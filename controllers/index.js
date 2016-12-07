var express = require('express')
var router = express.Router()
var members = require ('./members')
var card = require('./card')

router.use('/v1/members', members)
router.use('/v1', card)

module.exports = router


