var exp = require( 'express' );
var app = exp();

app.use(function(req, res, next) {
//  res.header( "Access-Control-Allow-Origin", "*" );
//  res.header( "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept" );
  next();
});

app.get('/', function (req, res) {
    res.send( 'Home page' );
});
app.get('/respond-to-ajax', function (req, res) {
    res.json( { message: 'Hello World!' });
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
