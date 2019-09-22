const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Record = require('../record')
const User = require('../user')
const recordList = require('../../records.json').results
const userList = require('../../users.json').results
const categoryToCh = require('../../libs/categoryToCh')



mongoose.connect('mongodb://localhost/expense', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('db error')
})

db.once('open', () => {
  console.log('db connected !')

  for (let i = 0; i < userList.length; i++) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(userList[i].password, salt, (err, hash) => {
        if (err) throw err
        userList[i].password = hash

        User.create(userList[i]).then(user => {
          for (let k = 0; k < recordList.length; k++) {
            recordList[k].categoryCh = categoryToCh(recordList[k].category)
            recordList[k].userId = user._id
            Record.create(recordList[k])
          }
        })
      })
    })
  }
  console.log('done')
})