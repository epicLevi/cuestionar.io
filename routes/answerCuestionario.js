var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('answer-cuestionario', { title: 'Título Cuestionario' });
});

module.exports = router;
