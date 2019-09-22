// 載入
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyPaser = require('body-parser')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const session = require('express-session')

//port
const port = '3000'

/*******************
       use
*******************/
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(methodOverride('_method'))
app.use(bodyPaser.urlencoded({ extended: true }))

app.use(session({
      secret: '2bornot2b',
      resave: false,
      saveUninitialized: true,
}))

/*******************
    mongo connect
*******************/
mongoose.connect('mongodb://localhost/expense', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', () => {
      console.log('mongodb error!')
})

db.once('open', () => {
      console.log('mongodb connected !')
})





/*******************
      static
*******************/
app.use(express.static('public'))


/*******************
      routes
*******************/
app.use('/', require('./routes/home'))
app.use('/expense', require('./routes/record'))
app.use('/filter', require('./routes/filter'))
app.use('/users', require('./routes/user'))

/*******************
    start server
*******************/
app.listen(port, () => {
      console.log('start localhost:3000')
})