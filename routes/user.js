const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({message: 'hello world get user'});
});

router.post('/', function(req, res, next) {
  res.json({message: 'hello world post user'});
});

router.put('/', function(req, res, next) {
  res.json({message: 'hello world put user'});
});

router.delete('/', function(req, res, next) {
  res.json({message: 'hello world delete user'});
});

module.exports = router;
