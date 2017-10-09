function bindEvents() {
  document.getElementById( 'second-email' )
    .addEventListener( 'blur', function( event ) {
      if ( event.target.value !== document.getElementById( 'first-email' ).value ) {
        event.target.setCustomValidity( 'The two email addresses must match.' );
      } else {
        event.target.setCustomValidity( '' );
      }
    });
  document.getElementById( 'sign-up' )
    .addEventListener( 'submit', function( e ) {
      e.preventDefault();
      makeAjaxCall( 'http://localhost:9999/check-email-available' );
    });
}
