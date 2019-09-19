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
      static
*******************/
app.use(express.static('public'))


/*******************
      routes
*******************/
app.use('/', require('./routes/home'))
app.use('/expense', require('./routes/record'))


/*******************
    start server
*******************/
app.listen(port, () => {
  console.log('start localhost:3000')
})