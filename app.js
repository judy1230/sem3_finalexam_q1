const express = require('express')
const app = express()
const port = 2500
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const db = mongoose.connection

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
mongoose.connect('mongodb://127.0.0.1/todo', { useNewUrlParser: true, useCreateIndex: true })

db.on('error', () => {
	console.log('mongodb error!')
})

db.once('open', () => {
	console.log('mongodb connected!')
})

app.use('/', require('./routes/home.js'))
app.use('/todos', require('./routes/todos.js'))

app.listen(2500, () => {
	console.log(`App running on port ${port}`)
})


