var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.method === "OPTION"){
    res.send(200);
  } else {
    res.send("확.인.");
    console.log("/ GET 확인");
  }

});

module.exports = router;
