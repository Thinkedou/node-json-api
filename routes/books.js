const express = require('express');
const router = express.Router();

const impDb = require('../services/imp-db');



router.get('/',  function(req, res) {
  const a =  impDb.findMany()
  res.send(a)
});


router.get('/about', function(req, res) {
    res.send('About Books');
});
  
module.exports = router;