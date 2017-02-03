var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
      sonofj: "I am son of J"
  });
});

module.exports = router;
