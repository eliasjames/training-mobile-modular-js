window.addEventListener( 'DOMContentLoaded', 
  function onBodyLoad() {
    addHandlers();
  }
);

function addHandlers() {
  window.addEventListener( 'offline', offlineHandler );
}
function offlineHandler( e ) {
  console.log( 'offlineHandler', e );
}
