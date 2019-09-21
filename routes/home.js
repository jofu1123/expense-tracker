const express = require('express')
const router = express.Router()
const Record = require('../models/record')


// 首頁
router.get('/', (req, res) => {
  let count = 0
  Record.find().exec((err, records) => {
    for (let i = 0; i < records.length; i++) {
      count += Number(records[i].amount)
    }

    if (err) return console.error(err)
    return res.render('index', { records, count })
  })
})

module.exports = router