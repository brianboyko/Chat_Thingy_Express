var express = require('express');
var router = express.Router();
var serverData = {"results": []};
var fs = require('fs');

console.log(fs.readFile('log.txt', function (err, data) {
  if (err) throw err;
  serverData = JSON.parse('' + data);
}))

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
  fs.writeFile('log.txt', JSON.stringify(serverData));
  res.send("POST received");
})

module.exports = router;
