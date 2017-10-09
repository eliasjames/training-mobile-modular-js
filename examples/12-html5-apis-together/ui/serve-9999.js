var Exp = require( 'express' );
var app = new Exp();
var bP = require( 'body-parser' );

// uncomment to resolve CORS / Same Origin error
app.use( function( req, res, next ) {
  console.log( 'ACAO headers' );
  res.header( "Access-Control-Allow-Origin", "*" );
  res.header( "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept" );
  next();
} );

app.use( bP.urlencoded() );

app.get( '/check-email-available', function( req, rsp ) {
  var desiredEmail = req.params.email;
  var chance = Math.random();
  var payload = {
    success: false,
    message: 'Email not available'
  };   

  if ( chance > 0.75 ) {
    payload = {
      success: true,
      message: 'Email available'
    };   
  }
  rsp.json( payload );
});

app.get( '*', function( req, rsp ) {
  rsp.send( 'Hello World' );
});

app.use( function logger ( err, req, res, next ) {
  console.error( err, req );
  next( err );
});

app.use( function clientErrorHandler (err, req, res, next) {
  if ( req.xhr ) {
    res.status( 500 ).send( { error: 'Something failed!' } );
  } else {
    next( err )
  }
});

app.use( function genericHandler ( err, req, res, next ) {
  res.status( 500 ).send( err.message );  
});

app.listen( 9999 );
console.log( 'Listening' );
