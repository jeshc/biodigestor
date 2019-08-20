var express = require('express');
var router = express.Router();

/* GET lecturas listing. */
router.get('/', function(req, res, next) {
  res.send('lecturas');
});

module.exports = router;
