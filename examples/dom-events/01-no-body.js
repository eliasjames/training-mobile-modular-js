var body = document.getElementsByTagName( 'body' )[0];
// load event still won't fire on body - see 02-document-versus-window
body.addEventListener( 'load', function() { alert( 'load event fired' ); } );
