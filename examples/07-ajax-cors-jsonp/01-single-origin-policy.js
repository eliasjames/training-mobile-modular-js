function onBodyLoad() {
  makeAjaxCall();
}
function makeAjaxCall() {
  var myAjax = new XMLHttpRequest();
  
  myAjax.addEventListener( 'load', reqListener );
  myAjax.open( 'GET', 'http://localhost:3000/respond-to-ajax' );
  myAjax.send();

}
function reqListener () {
  console.log( this.responseText );
}
