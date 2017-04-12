describe( 'ajax', function() {

  beforeEach(function() {
    jasmine.Ajax.install();
  });

  afterEach(function() {
    jasmine.Ajax.uninstall();
  });

  it( 'should not make a real ajax call', function() {
    expect( 1 ).toEqual( 1 );
    makeAjaxCall();
    request = jasmine.Ajax.requests.mostRecent();
    console.log( 'blerg', request );
    request.respondWith({ "dummy": "data" });
    expect(request.url).toBe('http://localhost:3000/respond-to-ajax');
  });
});
