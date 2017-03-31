var exp = require( 'express' );
var app = exp();

app.get('/', function (req, res) {
    res.send('Hello World!')
});
app.get('/respond-to-ajax', function (req, res) {
    res.json( { message: 'Hello World!' });
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
