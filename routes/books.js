const express = require('express');
const router = express.Router();



router.get('/', function(req, res) {
    res.send('Books home page');
  });


router.get('/about', function(req, res) {
    res.send('About Books');
});
  
  module.exports = router;