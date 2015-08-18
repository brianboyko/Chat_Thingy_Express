var express = require('express');
var router = express.Router();
var serverData = {"results": []};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile(__dirname + '/index.html');
});

/* GET messages */
router.get('/classes', function(req, res) {
  res.json(serverData);
});

/* POST messages */
router.post('/classes', function(req, res) {
  serverData.results.push(req.body);
  res.send("POST received");
})

module.exports = router;
