var express = require('express')
var port = process.env.PORT || 3000
var app = express()

app.set('views', './views')
app.set("view engine","ejs")
app.listen(port)

console.log('node-mongo started on port'+ port)

// index page
app.get('/', function (req, res) {
	res.render('index', {
		title: '首页'
	})
})

// detail page
app.get('/detail', function (req, res) {
	res.render('detail', {
		title: 'detail'
	})
})

// // admin page
app.get('/admin', function (req, res) {
	res.render('admin', {
		title: 'admin'
	})
})

// // list page
app.get('/list', function (req, res) {
	res.render('list', {
		title: 'list'
	})
})
