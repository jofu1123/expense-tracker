const mongoose = require('mongoose')
const Record = require('../record')
const recordList = require('../../records.json').results
const categoryToCh = require('../../libs/categoryToCh')

mongoose.connect('mongodb://localhost/expense', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('db error')
})

db.once('open', () => {
  console.log('db connected !')

  for (item in recordList) {
    // console.log(recordList[item].category)
    recordList[item].categoryCh = categoryToCh(recordList[item].category)
    Record.create(recordList[item])
  }

  console.log('done')
})