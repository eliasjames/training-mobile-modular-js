let GLOBAL_CONFIG = require( './01-config' );
let $ = require( 'jQuery' );

module.exports = function() {
  $( document ).ready(function() {
      $( '#' + GLOBAL_CONFIG.ui.els.newGame )
        .on( 'click', ()=>{
          document.dispatchEvent( new Event( 'startNewGame' ));
        })
  });
};
