window.addEventListener( 'DOMContentLoaded', 
  function onBodyLoad() {
    addHandlers();
  }
);

function addHandlers() {
  document.getElementsByTagName( 'button' )[0]
    .addEventListener( 'click', ()=>{ 
      if ( navigator && navigator.geolocation ) {
        navigator.geolocation.getCurrentPosition( geoSuccess, geoFail );
      }
    });
}
function geoFail( err ) {
  console.log( 'geoFail', err );
}
function geoSuccess( geo ) {
  console.log( 'geoSuccess', geo );
}
