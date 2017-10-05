var Exp = require( 'express' );
var app = new Exp();
var serveStatic = require('serve-static')

app.use( serveStatic( __dirname, { 'index': ['index.html', 'default.htm']} ));

app.listen( 3000 );
console.log( 'Listening' );
