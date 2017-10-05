function makeAjaxCall( url ) {
  var myAjax = new XMLHttpRequest();
  
  myAjax.addEventListener( 'load', reqListener );
  myAjax.open( 'GET', url );
  myAjax.send();

}
function reqListener () {
  console.log( this.responseText );
}
