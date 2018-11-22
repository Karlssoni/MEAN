// server.js

var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.get('/', function(req, res) {
  res.render('pages/index.ejs');
  app.use( express.static( "public" ) );
});
app.listen(8081);
console.log('8081 is the magic port');
