var express = require('express');
var app = express();

app.configure(function() {
  	app.use(express.bodyParser());
  	app.use(express.static(__dirname + '/app'));
});

app.get('*', function(req, res){
	res.renderFile('index.html');	
});

var port = 3000;
app.listen(port);

console.log('server listening on port: ' + port );