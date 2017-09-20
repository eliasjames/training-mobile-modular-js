module.exports = (function() {
  let Exp = require( 'express' ),
    app = new Exp();

  app.get( '/players', ( req, res )=>{
    console.log( 'Heard /players' );
    res.json({
      playerAttributesObj: [
        {
          'letter': 'x',
          'name'  : 'Willie Nelson',
          'number'  : 1
        },
        {
          'letter': 'o',
          'name'  : 'Miles Davis',
          'number'  : 2
        }
      ],
    });
  });
  app.get( '/players/highscorer', ( req, res )=>{
    console.log( 'Heard /players/highscorer' );
    res.json({
      highscorer: { playerNumber: 2, wins: 17 }
    });
  });
  // faking a RESTful API
  app.get( '/player/1/record', ( req, res )=>{
    console.log( 'Heard /player/1/record' );
    res.json({
      playerRecord: [
        { 'date': 20170319, 'result': 1 },
        { 'date': 20170412, 'result': 1 },
        { 'date': 20170505, 'result': 0 },
        { 'date': 20170303, 'result': 1 },
        { 'date': 20170626, 'result': 0 }
      ]
    });
  });
  app.get( '/', ( req, res )=>{
    res.redirect( '04-multi-jquery.html' );
  });
  app.use( Exp.static( __dirname ));

  console.log( 'Listening!' );
  app.listen( 8000 );

  function pingBack( res ) {
    res.send( data );
  }
})();
