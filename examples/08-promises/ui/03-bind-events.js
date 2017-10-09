function bindEvents() {
  var mySignUp = document.getElementById( 'sign-up' );

  function onlineHandler ( e ) {
    e.preventDefault();
    checkEmail();
  }
  function offlineHandler ( e ) {
    e.preventDefault();
    saveToLocalStorage( 
      'email', 
      e.target[0].value
    );
  }

  mySignUp.addEventListener( 'submit', onlineHandler );

  window.addEventListener( 'online', function() {
    console.log( 'online' );
    mySignUp.removeEventListener( 'submit', offlineHandler );
    mySignUp.addEventListener( 'submit', onlineHandler );
  });
  window.addEventListener( 'offline', function() {
    console.log( 'offline' );
    mySignUp.removeEventListener( 'submit', onlineHandler );
    mySignUp.addEventListener( 'submit', offlineHandler );
  });

  document.getElementById( 'second-email' )
    .addEventListener( 'blur', function( event ) {
      if ( event.target.value !== document.getElementById( 'first-email' ).value ) {
        event.target.setCustomValidity( 'The two email addresses must match.' );
      } else {
        event.target.setCustomValidity( '' );
      }
    });
}
