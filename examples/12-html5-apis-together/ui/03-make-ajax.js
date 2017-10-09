function makeAjaxCall( url, success, error ) {
  var myAjax = new XMLHttpRequest();
	var success = success;
	var error = error;

	if ( !success ) {
		success = function( message, xhr ) { 
			console.log( 'Success', message, xhr );
		};
  }

	if ( !error ) {
		error = function( message, xhr ) { 
			console.log( 'Error', message, xhr );
		};
  }

  myAjax.addEventListener( 'readystatechange', readyStateHandler );
  // myAjax.onerror = readyStateHandler;
  
  myAjax.open( 'GET', url );
	myAjax.send();

	function readyStateHandler () {
		if ( this.readyState === 4 || this.readyState === 0 ) {
			if ( this.status === 0 ) {
				error( 'Server did not respond' );
				return;
			}
			if ( this.status === 200 ) {
				success( this.responseText, this );
				return;
			} 
			if ( this.status > 299 &&  this.status < 400 ) {
				return;
			}
			// all other statuses
			error( 'statusText (if any): ', this.statusText );
			return;
		}
	}
}
