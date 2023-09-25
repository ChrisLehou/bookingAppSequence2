const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({message: 'hello world get spot'});
});

router.post('/', function(req, res, next) {
  res.json({message: 'hello world post spot.'});
});

router.put('/', function(req, res, next) {
  res.json({message: 'hello world put spot '});
});

router.delete('/', function(req, res, next) {
  res.json({message: 'hello world delete spot'});
});

module.exports = router;
