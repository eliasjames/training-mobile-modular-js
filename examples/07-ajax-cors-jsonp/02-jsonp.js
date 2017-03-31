function onBodyLoad() {
  makeJsonPCall();
}
function callbackForJsonP(){
  console.log( 'event: local JsonP finished' );
}
function makeAjaxCall() {
  var myAjax = new XMLHttpRequest();
  
  myAjax.addEventListener( 'load', reqListener );
  myAjax.open( 'GET', 'http://localhost:3000/respond-to-ajax' );
  myAjax.send();

}
function makeJsonPCall() {
  var script = document.createElement( 'script' );
  script.src = 'http://localhost:3000/execute-jsonp?callback=callbackForJsonP';
  document.getElementsByTagName( 'body' )[0].appendChild( script );
}
function reqListener() {
  console.log( this.responseText );
}
