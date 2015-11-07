var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	var j = ['User 1', 'User 2', 'User 3'];
	var s = "";
	for(i = 0; i < j.length; i++) {
  		s += j[i] + "\n";
  	}
  	res.send(s);
});

module.exports = router;
