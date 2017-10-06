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
      //checkEmail();
      debugger;
      saveToLocalStorage( 
        'email', 
        e.target[0].value
      );
    });
}
