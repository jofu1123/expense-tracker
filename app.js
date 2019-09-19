// 載入
const express = require('express')
const app = express()

//port
const port = '3000'

/*******************
        routes
*******************/
app.get('/', (req, res) => {
  res.send('success')
})


/*******************
    start server
*******************/
app.listen(port, () => {
  console.log('start localhost:3000')
})