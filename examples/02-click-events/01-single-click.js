window.addEventListener( 'DOMContentLoaded',  onDomContentLoad);

function onDomContentLoad() { 
  var clickTarget = document.getElementsByClassName( 'click-target' )[0];
  clickTarget.addEventListener( 'click', function (){
    console.log( 'click event fired', Date.now() ); 
  });
}
