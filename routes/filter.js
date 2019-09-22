const express = require('express')
const router = express.Router()
const Record = require('../models/record')
const total = require('../libs/total')
const categoryToCh = require('../libs/categoryToCh')

router.get('/', (req, res) => {
  Record.find().exec((err, records) => {
    const keyword = req.query.keyword
    const newRecords = records.filter(({ category }) => {
      return category === keyword
    })
    if (err) return console.error(err)

    const showKeyword = categoryToCh(req.query.keyword)
    const count = total(newRecords)
    return res.render('index', { records: newRecords, count, keyword: showKeyword })
  })
})


module.exports = router