var exp = require( 'express' );
var app = exp();

app.use(function(req, res, next) {
  res.header( "Access-Control-Allow-Origin", "*" );
  res.header( "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept" );
  next();
});

app.get('/', function (req, res) {
  res.send( 'Home page' );
});
app.get('/check-permission', function (req, res) {
  const permission = ( Math.random() < 0.75 ) ? true : false;
  res.json( { permission: permission });
});
app.get('/restricted-thing', function (req, res) {
  res.json( { message: 'accessed the restricted thing' });
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
