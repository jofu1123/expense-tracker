const express = require('express')
const router = express.Router()
const Record = require('../models/record')


// 首頁
router.get('/', (req, res) => {
  Record.find().exec((err, records) => {
    console.log(records)
    if (err) return console.error(err)
    return res.render('index', { records })
  })
  // res.render('index')
})

module.exports = router