var express = require('express');
var router = express.Router();
const User = require('../model/user');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  await User.find( {},(err, doc)=> {
    if (err) console.log(err);
    console.log(doc,"형태확인")
    res.set('Content-Type', 'json/application');
    res.send(JSON.stringify(doc));
  })
});

module.exports = router;
