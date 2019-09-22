const express = require('express')
const router = express.Router()
const Record = require('../models/record')
const total = require('../libs/total')
const categoryToCh = require('../libs/categoryToCh')

// 首頁
router.get('/', (req, res) => {
  Record.find().exec((err, records) => {
    let count = total(records)
    const keyword = categoryToCh(req.query.keyword)
    if (err) return console.error(err)
    return res.render('index', { records, count, keyword })
  })
})

module.exports = router