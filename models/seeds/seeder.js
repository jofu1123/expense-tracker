const mongoose = require('mongoose')
const Record = require('../record')
const recordList = require('../../records.json').results

mongoose.connect('mongodb://localhost/expense', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('db error')
})

db.once('open', () => {
  console.log('db connected !')

  for (item in recordList) {
    Record.create(recordList[item])
  }

  console.log('done')
})