const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({message: 'hello world get room'});
});

router.post('/', function(req, res, next) {
  res.json({message: 'hello world post room.'});
});

router.put('/', function(req, res, next) {
  res.json({message: 'hello world put room'});
});

router.delete('/', function(req, res, next) {
  res.json({message: 'hello world delete room.'});
});

module.exports = router;
