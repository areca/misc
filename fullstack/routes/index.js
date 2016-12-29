var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:name', function(req, res) {
  var name = req.params.name;
  res.render('index', { title: name });
});

module.exports = router;
