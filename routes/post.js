var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('form');
});

router.post('/post', function(req, res) {
	var userName = req.body.userName;
	var html = 'Hello: ' + userName + '.<br>' +
	             '<a href="/">Try again.</a>';
	res.render(form);
}); 

module.exports = router;
