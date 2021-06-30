var connect = require('connect')
var url = require('url')
var proxy = require('proxy-middleware')

var appData = require('../data.json')
var seller = appData.seller
var goods = appData.goods
var ratings = appData.ratings

var app = connect()

app.get('/seller', function (req, res) {
  res.json({
      errno: 0,
      data: seller
    }
  )
})

app.get('/goods', function (req, res) {
  res.json({
      errno: 0,
      data: goods
    }
  )
})


app.get('/ratings', function (req, res) {
  res.json({
      errno: 0,
      data: ratings
    }
  )
})


