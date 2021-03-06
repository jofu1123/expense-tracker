const express = require('express')
const router = express.Router()
const Record = require('../models/record')
const total = require('../libs/total')
const categoryToCh = require('../libs/categoryToCh')
const { authenticated } = require('../config/auth')

// 首頁
router.get('/', authenticated, (req, res) => {
  Record.find({ userId: req.user._id }).exec((err, records) => {
    let totalAmount = total(records)
    let categoryCh = categoryToCh()

    if (err) return console.error(err)
    return res.render('index', { records, totalAmount, categoryCh })
  })
})

module.exports = router