const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({message: 'hello world get resa'});
});

router.post('/', function(req, res, next) {
  res.json({message: 'hello world post resa.'});
});

router.put('/', function(req, res, next) {
  res.json({message: 'hello world put resa'});
});

router.delete('/', function(req, res, next) {
  res.json({message: 'hello world delete resa.'});
});

module.exports = router;
