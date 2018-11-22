// server.js

var express = require('express');
var app = express();

var json = JSON.parse(require('fs').readFileSync('data.json', 'utf8'));

app.set('view engine', 'ejs');
app.use( express.static( "public" ) );




app.get('/', function(req, res) {
  res.render('pages/index');

  });
app.get('/guestbook', function(req, res) {
    res.render('pages/iguestbook');

    var tag = json;
    res.render('pages/iguestbook', {tag:tag});

});

app.listen(8081);
console.log('8081 is the magic port');
