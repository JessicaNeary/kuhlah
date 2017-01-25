var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  db.getColor((err, color) => {
    // Warning: this error handling is rubbish
    if (!err) res.json(color)
  })
})

router.post('/', function (req, res) {
  const color = req.body.color
  db.addColor(color, (err, colorName) => {
    res.json({message: 'Color add successfully.'})
  })
})

module.exports = router
