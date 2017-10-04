function onBodyLoad() {
  makeAjaxCall( 'http://localhost:3000/respond-to-ajax' );
}
function makeAjaxCall( url ) {
  var myAjax = new XMLHttpRequest();
  
  myAjax.addEventListener( 'load', reqListener );
  myAjax.open( 'GET', url );
  myAjax.send();

}
function reqListener () {
  console.log( this.responseText );
}
