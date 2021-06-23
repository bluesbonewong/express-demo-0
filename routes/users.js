var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/xxx', function(req, res, next) {
  res.send('哈哈哈，太简单');
});

module.exports = router;
