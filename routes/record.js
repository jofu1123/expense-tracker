const express = require('express')
const router = express.Router()

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
  res.redirect('/')
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