var exp = require( 'express' );
var app = exp();

app.get('/', function (req, res) {
    res.send('Hello World!')
});
app.get('/execute-jsonp', function (req, res) {
  var payload = 'console.log( "executed from localhost:3000" );';
  console.log( 'payload', payload );
  res.send( payload + req.query.callback + '();');
});
app.get('/respond-to-ajax', function (req, res) {
    res.json( { message: 'Hello World!' });
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
