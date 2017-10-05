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
      makeAjaxCall( 
				'http://localhost:9999/check-email-available', 
				function( text, xhr ) {
					var emailAccepted = JSON.parse( xhr.responseText ).success;
					var userMessageEl = document.getElementsByClassName( 'user-message' )[0]
					if ( emailAccepted ) {
						userMessageEl.innerHTML = 'Email Accepted';
						document.querySelector( '#sign-up input[type="submit"]' )
							.disabled = true;
						return;
					}
					userMessageEl.innerHTML = 'Email Unavailable';
					return;
				}
			);
    });
}
