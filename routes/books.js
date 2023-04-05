const express = require('express');
const router = express.Router();

const impDb = require('../services/imp-db');



router.get('/',  function(req, res) {
  const a =  impDb.findMany()
  res.send(a)
});


router.get('/:bookId', function(req, res) {
    const {bookId} = req.params
    const one =  impDb.findOne(bookId)
    if(one.status==200){
      res.send(one.data)
    }else{
      res.status(404).send('Not found')
    }
});


router.post('/', function(req, res) {
  const {body} = req
  const tryToInsert =  impDb.insertOne(body)
  res.send(tryToInsert);
});


router.put('/:bookId', function(req, res) {
  const {params,body} = req
  const {bookId} = params
  const updated =  impDb.updateOne(bookId,body)
  console.log(updated)
  const {status,data}= updated
  if(status==200){
    res.send(data);
  }else{
    res.sendStatus(404)
  }
});
router.delete('/:bookId', function(req, res) {
  const {params} = req
  const {bookId} = params
  const tryToDelete =  impDb.deleteOne(bookId)
  const {status=false}= tryToDelete
  if(status==200){
    res.send('gone');
  }else{
    res.sendStatus(404)
  }
});

  
module.exports = router;