// 載入
const express = require('express')
const app = express()
if (process.env.NODE_ENV !== 'production') {
      require('dotenv').config()
}
const exphbs = require('express-handlebars')
const bodyPaser = require('body-parser')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const session = require('express-session')
const passport = require('passport')
const flash = require('connect-flash')

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

app.use(flash())
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
    passport set
*******************/
app.use(passport.initialize())
app.use(passport.session())

require('./config/passport')(passport)
app.use((req, res, next) => {
      res.locals.user = req.user
      res.locals.isAuthenticated = req.isAuthenticated()
      res.locals.success_msg = req.flash('success_msg')
      res.locals.warning_msg = req.flash('warning_msg')
      next()
})
/*******************
      routes 
*******************/
app.use('/', require('./routes/home'))
app.use('/expense', require('./routes/record'))
app.use('/filter', require('./routes/filter'))
app.use('/users', require('./routes/user'))
app.use('/auth', require('./routes/auths'))

/*******************
    start server
*******************/
app.listen(port, () => {
      console.log('start localhost:3000')
})