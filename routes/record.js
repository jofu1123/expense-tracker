const express = require('express')
const router = express.Router()
const Record = require('../models/record')

// 列出所有record
router.get('/', (req, res) => {
  res.redirect('/')
})

// 新增record頁面
router.get('/new', (req, res) => {
  res.render('new')
})

// 新增紀錄record
router.post('/', (req, res) => {
  const record = new Record({
    name: req.body.name,
    date: req.body.date,
    category: req.body.category,
    amount: req.body.amount
  })
  record.save(err => {
    if (err) return console.error(err)
    return res.redirect('/')
  })
})

// 編輯record頁面
router.get('/:id/edit', (req, res) => {
  res.render('edit')
})

// 編輯record紀錄
router.put('/:id/edit', (req, res) => {
  res.render('edit')
})

// 刪除record
router.delete('/:id/delete', (req, res) => {
  res.redirect('/')
})

module.exports = router 