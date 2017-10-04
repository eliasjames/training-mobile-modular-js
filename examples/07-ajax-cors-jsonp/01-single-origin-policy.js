function onBodyLoad() {
  makeAjaxCall();
}
function makeAjaxCall() {
  var myAjax = new XMLHttpRequest();
  
  myAjax.addEventListener( 'load', reqListener );
  myAjax.open( 'GET', 'http://localhost:9999/players/1' );
  myAjax.send();

}
function reqListener () {
  console.log( this.responseText );
}
