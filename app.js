// 載入
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyPaser = require('body-parser')


//port
const port = '3000'

/*******************
       use
*******************/
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


/*******************
      routes
*******************/
app.use('/', require('./routes/home'))


/*******************
    start server
*******************/
app.listen(port, () => {
  console.log('start localhost:3000')
})