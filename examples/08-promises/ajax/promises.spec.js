describe( 'promises', function() {

  var localPromise;

  beforeEach(function() {
    localPromise = makePromises( jQuery );
  });

  afterEach(function() {
    localPromise = undefined;
  });

  it( 'should honor promises', function( done ) {
    var testPromise = localPromise.getPlayerInfo();
    testPromise.then( function() { console.log( 'then' ); });
    done();
  });
});
