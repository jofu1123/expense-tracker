const express = require('express')
const router = express.Router()
const Record = require('../models/record')
const categoryToCh = require('../libs/categoryToCh')
const { authenticated } = require('../config/auth')

// 列出所有record
router.get('/', authenticated, (req, res) => {
  res.redirect('/')
})

// 新增record頁面
router.get('/new', authenticated, (req, res) => {
  res.render('new')
})

// 新增紀錄record
router.post('/', authenticated, (req, res) => {
  const record = new Record({
    name: req.body.name,
    date: req.body.date,
    category: req.body.category,
    amount: req.body.amount,
    userId: req.user._id
  })
  record.save(err => {
    if (err) return console.error(err)
    return res.redirect('/')
  })
})

// 編輯record頁面
router.get('/:id/edit', authenticated, (req, res) => {
  Record.findOne({ _id: req.params.id, userId: req.user._id }, (err, record) => {
    if (err) return console.log(err)
    const categoryCh = categoryToCh(record.category)
    return res.render('edit', { record, categoryCh })
  })
})

// 編輯record紀錄
router.put('/:id/edit', authenticated, (req, res) => {
  Record.findOne({ _id: req.params.id, userId: req.user._id }, (err, record) => {
    if (err) return console.error(err)
    record.name = req.body.name
    record.category = req.body.category
    record.date = req.body.date
    record.amount = req.body.amount
    record.save((err) => {
      if (err) return console.error(err)
      return res.redirect('/')
    })
  })
})

// 刪除record
router.delete('/:id/delete', authenticated, (req, res) => {
  Record.findOne({ _id: req.params.id, userId: req.user._id }, (err, record) => {
    record.remove(err => {
      if (err) return console.error(err)
      return res.redirect('/')
    })
  })
})

module.exports = router 