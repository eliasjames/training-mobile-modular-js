function checkEmail ( text, xhr ) {
  makeAjaxCall( 
    'http://localhost:9999/check-email-available', 
    emailAccepted
  );
}
function emailAccepted ( text, xhr ) {
  var emailSuccess = JSON.parse( xhr.responseText ).success;
  var userMessageEl = document.getElementsByClassName( 'user-message' )[0]
  if ( emailSuccess ) {
    userMessageEl.innerHTML = 'Email Accepted';
    document.querySelector( '#sign-up input[type="submit"]' )
      .disabled = true;
    return;
  }
  userMessageEl.innerHTML = 'Email Unavailable';
  return;
}
function saveToLocalStorage( key, value ) {
  var userMessageEl = document.getElementsByClassName( 'user-message' )[0]

  // TODO: validate parameters
  window.localStorage.setItem( key, value );
  userMessageEl.innerHTML = 'Saved ' + value.toString().substr( 0, 5 ) + '...';
}
